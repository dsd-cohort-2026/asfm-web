import { useState } from 'react';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import getBirthdayYear from '@/utils/getBirthday';
import { useEffect } from 'react';
import MedicalLogCard from '@/components/single-animal/MedicalLogCard';
import { AnimalGeneralInfo } from '@/components/single-animal/AnimalGeneralInfo';

export default function SingleAnimalPage({ id }) {
  const [viewAnimal, setViewAnimal] = useState('');
  const [animalLogs, setAnimalLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = 'http://localhost:3005'; // <-- placeholder

  async function fetchAnimal(id) {
    try {
      const response = await fetch(`${url}/animals?id=${id}`);
      if (!response.ok) {
        throw new Error(`Fetch request error status: ${response.status}`);
      }
      const data = await response.json();
      if (data.length === 0) {
        setIsError(true);
        setViewAnimal(null);
        return { error: true, animal: null };
      }
      const animal = data[0];

      const updatedAnimal = {
        ...animal,
        age: animal.dob ? getBirthdayYear(animal.dob) : null,
        altered: animal.altered ? 'Fixed' : 'Not Fixed',
      };
      setViewAnimal(updatedAnimal);
      return data[0];
    } catch (err) {
      console.error('Failed to fetch animal', err);
      throw err;
    }
  }

  async function fetchAnimalMedicalLogs(id) {
    try {
      const response = await fetch(`${url}/medical-logs?animal_id=${id}`);
      if (!response.ok) {
        throw new Error(`Failed to find the animal's medical logs ${response.status}`);
      }
      const data = await response.json();
      sortMedicalLogs(data);
      setAnimalLogs(data);
      return data;
    } catch (err) {
      console.error('Failed to fetch animal medical logs', err);
      throw err;
    }
  }

  function sortMedicalLogs(logs) {
    logs.sort((a, b) => new Date(b.logged_at) - new Date(a.logged_at));
  }

  async function fetchAllAnimalRecords(id) {
    const animalBase = await fetchAnimal(id);
    if (animalBase) {
      await fetchAnimalMedicalLogs(id);
      setIsLoading(false);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    fetchAllAnimalRecords(id);
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center pt-10">
        <Spinner className="size-12 text-primary" />
      </div>
    );

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Oops!</h2>
        <p className="text-lg text-gray-700">That animal doesn't seem to be available right now.</p>
        <p className="mt-2 text-gray-500">Please try searching again or check back later.</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <article>
          <AnimalGeneralInfo viewAnimal={viewAnimal} />
          <Card className="mt-10">
            <CardTitle className="pl-5">Medical Logs</CardTitle>
            <CardDescription className="px-5 flex flex-col gap-y-5">
              {animalLogs &&
                animalLogs.map((log, index) => <MedicalLogCard key={index} log={log} />)}
            </CardDescription>
          </Card>
        </article>
      </div>
    </>
  );
}

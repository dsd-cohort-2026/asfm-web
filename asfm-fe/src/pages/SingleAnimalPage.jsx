import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AnimalInputGroup from '../components/single-animal/AnimalInputGroup';
import getBirthdayYear from '@/utils/getBirthday';
import { useEffect } from 'react';
import MedicalLogCard from '@/components/single-animal/MedicalLogCard';
import { AnimalGeneralInfo } from '@/components/single-animal/AnimalGeneralInfo';

export default function SingleAnimalPage() {
  // state to be replaced with global state and actions once ready
  const [isStaff, setIsStaff] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const animal = {
    idx: 0,
    id: '216e57fd-25f8-4a9d-8045-c30dbf4ee5a6',
    name: 'Winnie',
    chip_id: 12387,
    created_at: '2026-02-28 01:34:35.652',
    dob: '2012-05-06 04:00:00',
    sex: 'FEMALE',
    species: 'CAT',
    foster_status: 'FOSTERED',
    kennel_id: 20,
    altered: false,
    weight: 12.6,
    last_modified: '2026-02-28 01:34:35.643',
    picture: 'lounging-cat.jpeg',
  };
  const [viewAnimal, setViewAnimal] = useState(animal);

  useEffect(() => {
    if (viewAnimal.dob) {
      setViewAnimal({
        ...viewAnimal,
        age: getBirthdayYear(viewAnimal.dob),
      });
    }
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <article>
          {isStaff && (
            <div className="flex justify-end">
              <Button className={'rounded-lg'} onClick={() => setIsEditing(!isEditing)}>
                Edit Animal Info
              </Button>
            </div>
          )}
          {isEditing ? (
            <AnimalEditForm isEditing={isEditing} viewAnimal={viewAnimal} />
          ) : (
            <AnimalGeneralInfo viewAnimal={viewAnimal} />
          )}
          <Card className="mt-10">
            <CardTitle className="pl-5">Medical Logs</CardTitle>
            <CardDescription className="px-5 flex flex-col gap-y-5">
              <MedicalLogCard />
            </CardDescription>
          </Card>
        </article>
      </div>
    </>
  );
}

export function AnimalEditForm({ isEditing, viewAnimal }) {
  function handleChange(e, viewAnimal, prop) {
    setViewAnimal({ ...viewAnimal, [prop]: e.target.value });
  }

  return (
    <>
      <h1>This is Admin View</h1>
      <div className="pt-10 grid grid-cols-[60%_40%] gap-x-5">
        <Card className={'p-4'}>
          <CardDescription>
            <div className="grid md:grid-cols-3 gap-x-4">
              <AnimalInputGroup
                isEditing={isEditing}
                viewAnimal={viewAnimal}
                htmlForLabel="name"
                labelTitle="Name"
                prop="name"
              />
              <div>
                <Label htmlFor="name" className={'pl-2 pb-1'}>
                  {' '}
                  Name
                </Label>
                <Input
                  id="name"
                  readOnly={!isEditing}
                  value={viewAnimal.name}
                  onChange={(e) => handleChange(e, viewAnimal, 'name')}
                />
              </div>
              <div>
                <Label htmlFor="sex" className={'pl-2 pb-1'}>
                  Sex
                </Label>
                <Input
                  id="sex"
                  readOnly={!isEditing}
                  value={viewAnimal.sex}
                  onChange={(e) => handleChange(e, viewAnimal, 'sex')}
                />
              </div>
              <div>
                <Label htmlFor="fixed-status" className={'pl-2 pb-1'}>
                  Fixed Status
                </Label>
                <Input
                  id="fixed-status"
                  readOnly={!isEditing}
                  value={viewAnimal.altered}
                  onChange={(e) => handleChange(e, viewAnimal, 'altered')}
                />
              </div>
            </div>
          </CardDescription>
        </Card>
        <Card></Card>
      </div>
    </>
  );
}

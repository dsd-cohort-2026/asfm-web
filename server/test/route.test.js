require('dotenv').config();

const getStaffUserToken = async () => {
  const response = await fetch(
    `https://tswvbykazoodrrqzfghs.supabase.co/auth/v1/token?grant_type=password`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: process.env.SUPABASE_PUBLISHABLE_KEY,
      },
      body: JSON.stringify({ email: 'another@test.com', password: 'password123' }),
    },
  );
  const data = await response.json();
  return data.access_token;
};

const getRegularUserToken = async () => {
  const response = await fetch(
    `https://tswvbykazoodrrqzfghs.supabase.co/auth/v1/token?grant_type=password`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: process.env.SUPABASE_PUBLISHABLE_KEY,
      },
      body: JSON.stringify({ email: 'testing@gmail.com', password: 'password123' }),
    },
  );
  const data = await response.json();
  return data.access_token;
};

const runTests = async () => {
  try {
    const staffToken = await getStaffUserToken();
    const userToken = await getRegularUserToken();
    const response = await fetch('http://localhost:8080/api/animals/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        name: 'Create Animal Test',
        chip_id: 555555555,
        dob: '2026-02-12',
        sex: 'MALE',
        species: 'DOG',
        foster_status: 'SHELTERED',
        kennel_id: 547856,
        altered: true,
        weight: 54.4,
        last_modified: '2026-02-25',
        picture: 'test.pic.jpeg',
        modified_by: 'b79ba20a-692d-413a-a30a-b84f4b394120',
      }),
    });
    const data = await response.json();
    console.log({ data });
  } catch (error) {
    console.log({ error });
  }
};

runTests();

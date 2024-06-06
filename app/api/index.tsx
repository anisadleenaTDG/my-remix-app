import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get('name');
  
  console.log('Submitting form with name (api):', name);

  if (typeof name !== 'string') {
    return new Response('Invalid name', { status: 400 });
  }

  try {
    const user = await prisma.user.create({
      data: { name },
    });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error('Error saving name:', error);
    return new Response('Error saving name', { status: 500 });
  }
}

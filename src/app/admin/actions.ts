'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { BrandingProductSchema, LogisticsVehicleSchema } from './schemas';

// Auth helpers
async function checkAuth() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('es_admin_auth');
  if (authCookie?.value !== process.env.ADMIN_PASSWORD) {
    throw new Error('Unauthorized');
  }
}

export async function loginAdmin(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  
  const isCorrectEmail = email === process.env.ADMIN_EMAIL;
  const isCorrectPassword = password === process.env.ADMIN_PASSWORD;

  if (isCorrectEmail && isCorrectPassword) {
    const cookieStore = await cookies();
    cookieStore.set('es_admin_auth', password, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });
    redirect('/admin');
  } else {
    return { error: 'Invalid email or password' };
  }
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete('es_admin_auth');
  redirect('/login');
}

// Branding Actions
export async function upsertBrandingProduct(data: z.infer<typeof BrandingProductSchema>) {
  await checkAuth();
  const validated = BrandingProductSchema.parse(data);
  const { id, ...rest } = validated;

  if (id) {
    await prisma.brandingProduct.update({
      where: { id },
      data: rest,
    });
  } else {
    await prisma.brandingProduct.create({
      data: rest,
    });
  }

  revalidatePath('/services/branding');
  revalidatePath('/admin/branding');
}

export async function deleteBrandingProduct(id: string) {
  await checkAuth();
  await prisma.brandingProduct.delete({
    where: { id },
  });

  revalidatePath('/services/branding');
  revalidatePath('/admin/branding');
}

// Logistics Actions
export async function upsertLogisticsVehicle(data: z.infer<typeof LogisticsVehicleSchema>) {
  await checkAuth();
  const validated = LogisticsVehicleSchema.parse(data);
  const { id, ...rest } = validated;

  if (id) {
    await prisma.logisticsVehicle.update({
      where: { id },
      data: rest,
    });
  } else {
    await prisma.logisticsVehicle.create({
      data: rest,
    });
  }

  revalidatePath('/services/logistics');
  revalidatePath('/admin/logistics');
}

export async function deleteLogisticsVehicle(id: string) {
  await checkAuth();
  await prisma.logisticsVehicle.delete({
    where: { id },
  });

  revalidatePath('/services/logistics');
  revalidatePath('/admin/logistics');
}

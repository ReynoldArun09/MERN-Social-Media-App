import { SignInSchemaType, SignUpSchemaType } from "@/utils/Schema";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const AUTH_URL = `${BASE_URL}/auth`;

export const SignUpUserApi = async (values: SignUpSchemaType) => {
  const response = await fetch(`${AUTH_URL}/sign-up-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const SignInUserApi = async (values: SignInSchemaType) => {
  const response = await fetch(`${AUTH_URL}/sign-in-user`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const VerfiyEmailToken = async (token: string) => {
  const response = await fetch(`${AUTH_URL}/verify-Email/${token}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};


export const VerfiyUserApi = async () => {
  const response = await fetch(`${AUTH_URL}/verify-user`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

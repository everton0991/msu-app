'use server';
import { cookies } from 'next/headers';

const clientId = '62688915016a4d78912544b795758e9a';
const redirectUri = 'http://localhost:3000';

const scope = 'user-read-private user-read-email';

async function generateCodeChallenge() {
  const generateRandomString = (length: number) => {
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], '');
  };

  const codeVerifier = generateRandomString(64);
  cookies().set('code_verifier', codeVerifier);

  const sha256 = async (plain: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return crypto.subtle.digest('SHA-256', data);
  };

  const base64encode = (input: ArrayBuffer) => {
    const inputArr = Array.from(new Uint8Array(input));

    return btoa(String.fromCharCode(...inputArr))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  };

  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  return { codeChallenge, codeVerifier };
}

export async function getData() {
  const { codeChallenge, codeVerifier } = await generateCodeChallenge();
  const authUrl = new URL('https://accounts.spotify.com/authorize');

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  return { authUrl, codeVerifier };
}

export async function getToken(code: string) {
  const codeVerifier = cookies().has('code_verifier')
    ? cookies().get('code_verifier')
    : 'nada';
  const clientId = '62688915016a4d78912544b795758e9a';
  const redirectUri = 'http://localhost:3003';
  const url = new URL('https://accounts.spotify.com/api/token/');
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    } as any), // TODO - Fix type
  };
  const body = await fetch(url, payload).catch(console.error);
  const response = await body?.json();

  console.log({ response });
  cookies().set('access_token', response.access_token);
}

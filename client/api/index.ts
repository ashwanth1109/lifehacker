/**
 * Register a new user
 * @param username
 * @param password
 * @return Response from API call
 */
export const registerUser = async ({
  username,
  password
}: {
  username: string;
  password: string;
}) => {
  const response = await fetch("/api/register", {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });
  return response;
};

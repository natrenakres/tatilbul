import auth from "@/src/shared/auth/auth";
import { TheHeading } from "@/src/shared/components/the-heading";


export async function ProfileScreen() {
  const user = await auth.getUser();  

  return (
    <section className="h-[80vh]">
      <TheHeading>
          My Profile
      </TheHeading>
      <section className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <li>
            <label>
              Name: 
              <strong>{user?.name}</strong>
            </label>
          </li>
          <li>
            <label>
              Email: 
              <strong>{user?.email}</strong>
            </label>
          </li>
        </ul>
      </section>
    </section>
  );
}

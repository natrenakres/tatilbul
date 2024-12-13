'use server';


export async function createSession(previousState: { message: string}, formData: FormData) {
    const email =  formData.get('email');
    const password = formData.get('password');


    console.log(email, password);

    return {
        message: 'OOK'
    }
}


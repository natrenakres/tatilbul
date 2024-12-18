import { Button } from "@/src/shared/ui/button";
import { LuGithub } from "react-icons/lu"


export function GithubLoginButton() {


    return (
        <Button className="w-full bg-black">
            <LuGithub size={'2rem'} /> Login with Github
        </Button>
    )
}
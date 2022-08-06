import NewMeetupForm from "../../components/newmeetup/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetupPage(){
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData){
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.json())
        if(response.status == 200){
            alert("Successfully Inserted");
            router.push("/");
        }else{
            alert("Error!!!")
        }
        
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
}

export default NewMeetupPage;
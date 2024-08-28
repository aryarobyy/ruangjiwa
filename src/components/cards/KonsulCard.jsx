import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { dateConvert } from "@/utils/dateConvert";
  

const KonsulCard = () => {
    const lastMessage = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores rem qui, accusantium illo ex, mollitia quaerat quia quidem totam laudantium autem amet! Earum debitis sapiente odio, aliquid dolor eligendi odit?'
    const date = new Date();
  return (
  <>
    <Card className="bg-primary w-fit hover:shadow-md">
        <CardDescription className="px-4 py-2">
          {
            dateConvert(date)
          }
        </CardDescription>
      <CardHeader className="w-fit px-4 py-1">
        <CardTitle className="text-base">Puan</CardTitle>
      </CardHeader>
      <CardFooter className="text-xs px-4 flex-col">
        <p className="">{`${lastMessage.slice(0, 30)}...`}</p>
      </CardFooter>
    </Card>
  </>
  );
};

export default KonsulCard;
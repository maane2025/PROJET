import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Hospital } from 'lucide-react'; // Using Hospital icon

export default function Home() {
  return (
    <div className="flex flex-grow items-center justify-center bg-secondary/20 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="items-center text-center">
           <div className="p-3 rounded-full bg-primary/10 text-primary mb-4 inline-block">
             <Hospital className="h-8 w-8" />
           </div>
          <CardTitle className="text-2xl font-bold">MediTrack Lite</CardTitle>
          <CardDescription>Welcome to the Hospital Management System.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center">
          <p className="text-center text-muted-foreground">
            Please login or register to continue.
          </p>
          <div className="flex gap-4 w-full justify-center">
            <Button asChild className="flex-1">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="/register">Register (Patient)</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

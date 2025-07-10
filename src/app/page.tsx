import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query'; 
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTRPC } from '@/trpc/client';
import { toast } from 'sonner';

const Page = () => {
  const [value, setValue] = useState("");

  const trpc = useTRPC(); 

  const createMessage = useMutation(trpc.messages.create.mutationOptions({
    onSuccess: () => {
      toast.success("Message created");
    }
  }));

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button disabled={createMessage.isPending} onClick={() => createMessage.mutate({ value: value })}>
        Invoke Background Job
      </Button>
    </div>
  );
};

export default Page;
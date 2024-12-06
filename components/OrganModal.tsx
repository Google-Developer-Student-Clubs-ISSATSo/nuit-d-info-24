import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Organ } from '@/lib/organ-data'
interface OrganModalProps {
  organ: Organ | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrganModal({ 
  organ, 
  open, 
  onOpenChange 
}: OrganModalProps) {
  if (!organ) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{organ.name}</DialogTitle>
          <DialogDescription>
            {organ.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4 text-primary">
          <div>
            <h3 className="font-semibold text-lg text-black">Function</h3>
            <p className='text-black'>{organ.function}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-black">Location</h3>
            <p className='text-black'>{organ.location}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg text-black">Fun Facts</h3>
            <ul className="list-disc list-inside space-y-2">
              {organ.funFacts.map((fact, index) => (
                <li key={index} className="text-sm text-black">
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
"use client";
import React, { useEffect, useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Organ } from "@/lib/organ-data";
import { Button } from "./ui/button";

interface OrganModalProps {
  organ: Organ | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrganModal({ organ, open, onOpenChange }: OrganModalProps) {
  const [response, setResponse] = useState("");
  const [generateResult, setGenerateResult] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleOpen() {
    try {
      fetch(`https://nuit-info-2024.onrender.com/ocean_equivalence`, {
        method: "POST",
        body: JSON.stringify({
          corps_name: organ?.name.toLowerCase(),
          previous_responses: []
        }),
        headers: {
          "Content-Type": "application/json",
          "cross-origin": "true",
          "allow-origin": "*",
        },
      })
        .then((response) => { console.log(response);
          return response.json()})
        .then((data) => {
          console.log(data);
          setResponse(data.response);
        });
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    if (open) {
      startTransition(() => {
        handleOpen();
      });
    } else {
      console.log("closing");
    }
  }, [open]);
  if (!organ) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <span>{organ.name}</span>
            <span className="ml-2 text-sm text-muted-foreground">
              {organ.oceanMetaphor.frenchTitle}
            </span>
          </DialogTitle>
          <DialogDescription>{organ.description}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4 text-primary">
          <div>
            <h3 className="font-semibold text-lg text-black">Fonction</h3>
            <p className="text-black">{organ.function}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-black">Location</h3>
            <p className="text-black">{organ.location}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-black">Faits amusants</h3>
            <ul className="list-disc list-inside space-y-2">
              {organ.funFacts.map((fact, index) => (
                <li key={index} className="text-sm text-black">
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg text-black">
              Métaphore de l&apos;océan{" "}
              {response ? (
                <Button onClick={() => setGenerateResult(!generateResult)}>
                  {generateResult ? "Hide" : "Generate"} AI Result
                </Button>
              ) : null}
            </h3>
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-blue-800">
                {organ.oceanMetaphor.oceanConnection}
              </h4>

              <p className="text-sm text-blue-700 italic">
                {generateResult
                  ? isPending
                    ? "loading..."
                    : response
                  : organ.oceanMetaphor.marineSimilarity}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

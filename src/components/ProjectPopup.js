import React, { useState } from 'react';
import { X, Github, Globe, FileText } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const ProjectPopupCard = ({ isOpen, onClose, post }) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{post?.title}</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
          </DialogClose>
        </DialogHeader>
        
        <div className="grid grid-cols-1 gap-4 py-4">
          <a 
            href={post?.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="font-medium">GitHub Repository</span>
          </a>
          
          <a 
            href={post?.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <Globe className="h-5 w-5" />
            <span className="font-medium">Live Project</span>
          </a>
          
          <a 
            href={post?.documentation} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <FileText className="h-5 w-5" />
            <span className="font-medium">Documentation</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPopupCard;
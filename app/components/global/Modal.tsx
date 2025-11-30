"use client";
import { cn } from '@/utils';
import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ClassValue } from 'clsx';
import React, { useState } from 'react'
import CloseBtn from './CloseBtn';

type ModalProps = {
    button: React.ReactNode;
    children: React.ReactNode;
    className?: ClassValue;
    closer?:React.ReactNode;
    confirmButton?:React.ReactNode;
}

export function Modal({
    button, children, className, confirmButton,  closer=undefined
}:ModalProps) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div onClick={() => setIsOpen(true)} className='inline-block'>
                {button}
            </div>
            <Transition show={isOpen}>
                <Dialog onClose={() => setIsOpen(false)} className="relative z-50">

                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30" />
                    </TransitionChild>
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 ">
                            <DialogPanel className={cn("max-w-lg space-y-4 bg-white p-4 relative rounded-xl pt-12", className)}>
                                <CloseBtn onClick={() => setIsOpen(false)} className='absolute top-4 left-4 '/>
                                {children}
                                {confirmButton && <div onClick={() => setIsOpen(false)}>
                                    {confirmButton}
                                </div>}
                                {closer && <div onClick={() => setIsOpen(false)}>
                                    {closer}
                                </div>}
                            </DialogPanel>
                        </div>
                    </TransitionChild>
                </Dialog>
            </Transition>
        </>
    )
}

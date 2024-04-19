"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef } from "react";
import { useState } from 'react';
import { Helpers } from "..";

export function useClientMediaQuery(query: string) {
    const [matches, setMatches] = useState<null | boolean>(null);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);

        const handleMatchChange = (e: any) => {
            setMatches(e.matches);
        };

        mediaQueryList.addEventListener('change', handleMatchChange);
        setMatches(mediaQueryList.matches);

        return () => {
            mediaQueryList.removeEventListener('change', handleMatchChange);
        };
        // const isMobile = useClientMediaQuery('(max-width: 600px)');
    }, [query]);

    return matches;
}

export const useSubmitForm = (toast: any) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const { push } = useRouter()
    const submitForm = async (e: FormEvent) => {
        e.preventDefault()
        const data = {
            email: (
                e.target[
                0 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            fullName: (
                e.target[
                1 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            phone: (
                e.target[
                5 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
            password: (
                e.target[
                3 as unknown as keyof typeof e.target
                ] as unknown as HTMLInputElement
            ).value,
        };
        if (data.email.trim() === "") {
            toast.error("Email cannot be empty");
            return;
        } if (data.password.trim() === "") {
            toast.error("Oga enter password jare 😡 ");
            return;
        } else if (!Helpers.isValidPassword(data.password)) {
            toast.error("Password not valid!");
            return
        } else if (data.phone.trim() === '') {
            toast.error("Oga enter your phone number!");
            return;
        }
        await fetch(('/api/signup'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(async res => {
                const isJson = res.headers.get('content-type')?.includes('application/json')
                const data = isJson ? await res.json() : null

                if (!res.ok) {
                    const error = (data && data.message) || res.status;
                    toast.error(error)
                    return Promise.reject(error)

                } else if (res.ok) {
                    toast.success("Sign up success")
                    push('/')
                    console.log(data)
                    return data
                }
            })
            .catch(err => {
                console.log(err)
            })
      
    }
    return { submitForm, visible, setPassword, password, setVisible }
}
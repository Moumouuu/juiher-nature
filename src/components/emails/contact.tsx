import * as React from 'react';

interface ContactTemplate {
    email: string;
    message:string
}

export const ContactTemplate: React.FC<Readonly<ContactTemplate>> = ({
                                                                          email,
    message
                                                                      }) => (
    <div>
        <h1>Nouveau message de la page contact</h1>
        <p>email: {email}</p>
        <p>message: {message}</p>
    </div>
);

import React from 'react';
import Button from './Button';
import { IconHeadphones } from '@tabler/icons-react';

const LetsTalkButton = ({ className }: { className?: string }) => {
    return (
        <Button href={"/contactus"} className={className}>
            Lets&apos;s Talk
            <IconHeadphones className={"shrink-0"} />
        </Button>
    );
};

export default LetsTalkButton;
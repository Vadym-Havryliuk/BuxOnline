import React from 'react';
import './TitleProfile.scss';

const TitleProfile = ({ switcher }) => {
    return (
        <span className="flex-wrap">
            <span onClick={() => switcher()}>
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9436 0.681156C14.1009 0.83793 14.2257 1.02422 14.3109 1.22933C14.3961 1.43445 14.4399 1.65437 14.4399 1.87647C14.4399 2.09857 14.3961 2.31848 14.3109 2.5236C14.2257 2.72872 14.1009 2.915 13.9436 3.07178L6.70281 10.3126L27.3747 10.3126C27.8222 10.3126 28.2515 10.4904 28.5679 10.8068C28.8844 11.1233 29.0622 11.5525 29.0622 12.0001C29.0622 12.4476 28.8844 12.8768 28.5679 13.1933C28.2515 13.5098 27.8222 13.6876 27.3747 13.6876L6.70281 13.6876L13.9436 20.9312C14.2606 21.2482 14.4387 21.6781 14.4387 22.1265C14.4387 22.5748 14.2606 23.0048 13.9436 23.3218C13.6266 23.6388 13.1966 23.8169 12.7483 23.8169C12.3 23.8169 11.87 23.6388 11.553 23.3218L1.42797 13.1968C1.27065 13.04 1.14583 12.8537 1.06065 12.6486C0.975483 12.4435 0.93164 12.2236 0.93164 12.0015C0.93164 11.7794 0.975483 11.5595 1.06065 11.3543C1.14583 11.1492 1.27065 10.9629 1.42797 10.8062L11.553 0.681156C11.7097 0.523836 11.896 0.399009 12.1012 0.313838C12.3063 0.228666 12.5262 0.184822 12.7483 0.184822C12.9704 0.184822 13.1903 0.228666 13.3954 0.313838C13.6005 0.399009 13.7868 0.523836 13.9436 0.681156Z" fill="#3F7EE8"/>
                </svg>
            </span>
            <h1>Перегляд профілю Шевченко Олена</h1>
        </span>
    );
};

export default TitleProfile;
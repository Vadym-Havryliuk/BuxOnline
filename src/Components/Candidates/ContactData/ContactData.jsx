import React, {useState} from 'react';
import './ContactData.scss';

const ContactData = () => {
    const [color, setColor] = useState(false);

    const colorSvg = color ? "#3F7EE8" : "#FFFFFF";

    const changeColor = () => {
        setColor(!color);
    };

    return (
        <div className="contact-data">
            <div className="contact-data-wrapper">
                <h3 className="contact-data-title">Контакти</h3>
                    <div className="email">
                        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.125 3.29159C1.125 2.73905 1.34449 2.20915 1.73519 1.81845C2.12589 1.42775 2.6558 1.20825 3.20833 1.20825H17.7917C18.3442 1.20825 18.8741 1.42775 19.2648 1.81845C19.6555 2.20915 19.875 2.73905 19.875 3.29159V13.7083C19.875 14.2608 19.6555 14.7907 19.2648 15.1814C18.8741 15.5721 18.3442 15.7916 17.7917 15.7916H3.20833C2.6558 15.7916 2.12589 15.5721 1.73519 15.1814C1.34449 14.7907 1.125 14.2608 1.125 13.7083V3.29159Z" stroke="#3F7EE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.125 3.2915L10.5 9.5415L19.875 3.2915" stroke="#3F7EE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>olena_sv@gmail.com</span>
                    </div>
                    <div className="number">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.51197 14.4886C11.5172 18.4938 15.2286 18.9324 16.3182 18.973C17.6349 19.0209 18.9786 17.9459 19.5599 16.8449C18.6328 15.7574 17.4255 14.9136 16.1036 13.999C15.3234 14.7782 14.362 16.2261 13.0818 15.7074C12.3536 15.4147 10.5557 14.5865 8.98489 13.0147C7.41405 11.4428 6.58593 9.64591 6.29114 8.91882C5.77239 7.63653 7.22447 6.67299 8.00468 5.89278C7.0901 4.54903 6.26093 3.31049 5.17551 2.43028C4.05885 3.01361 2.9776 4.34695 3.02655 5.68132C3.06718 6.77091 3.50572 10.4824 7.51197 14.4886ZM16.2411 21.0553C14.7411 21.0001 10.4901 20.4126 6.03801 15.9615C1.58697 11.5094 1.00051 7.25945 0.944262 5.75841C0.860929 3.47091 2.61301 1.24903 4.63697 0.381322C4.8807 0.276079 5.1476 0.23601 5.41148 0.265046C5.67537 0.294083 5.92717 0.391227 6.14218 0.546947C7.81718 1.76882 8.97239 3.61986 9.9651 5.06986C10.1716 5.37138 10.2662 5.7356 10.2325 6.09949C10.1989 6.46339 10.039 6.80407 9.78072 7.06257L8.36822 8.47611C8.69635 9.20007 9.36405 10.448 10.4578 11.5417C11.5516 12.6355 12.7995 13.3032 13.5245 13.6313L14.9359 12.2188C15.1951 11.9594 15.5373 11.7994 15.9025 11.7668C16.2678 11.7343 16.6329 11.8312 16.9338 12.0407C18.413 13.0657 20.1505 14.2042 21.4172 15.8261C21.5855 16.0427 21.6926 16.3005 21.7273 16.5726C21.7619 16.8447 21.7228 17.1212 21.6141 17.373C20.7422 19.4074 18.5359 21.1397 16.2411 21.0553Z" fill="#3F7EE8"/>
                        </svg>
                        <span>+48131416341</span>
                    </div>
                    <div className="telegram">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5007 0.083252C4.75065 0.083252 0.0839844 4.74992 0.0839844 10.4999C0.0839844 16.2499 4.75065 20.9166 10.5007 20.9166C16.2507 20.9166 20.9173 16.2499 20.9173 10.4999C20.9173 4.74992 16.2507 0.083252 10.5007 0.083252ZM15.334 7.16659C15.1777 8.81242 14.5007 12.8124 14.1569 14.6562C14.0111 15.4374 13.7194 15.6978 13.4486 15.7291C12.8444 15.7812 12.3861 15.3333 11.8027 14.9478C10.8861 14.3437 10.3652 13.9687 9.47982 13.3853C8.44857 12.7083 9.11523 12.3333 9.70898 11.7291C9.86523 11.5728 12.5319 9.14575 12.584 8.927C12.5912 8.89387 12.5903 8.85947 12.5812 8.8268C12.5721 8.79412 12.5552 8.76416 12.5319 8.7395C12.4694 8.68742 12.3861 8.70825 12.3132 8.71867C12.2194 8.7395 10.7611 9.70825 7.91732 11.6249C7.50065 11.9062 7.12565 12.052 6.79232 12.0416C6.41732 12.0312 5.70898 11.8333 5.17773 11.6562C4.52148 11.4478 4.01107 11.3333 4.05273 10.9687C4.07357 10.7812 4.33398 10.5937 4.82357 10.3958C7.86523 9.07283 9.88607 8.19783 10.8965 7.78117C13.7923 6.57284 14.3861 6.3645 14.7819 6.3645C14.8652 6.3645 15.0632 6.38533 15.1882 6.4895C15.2923 6.57283 15.3236 6.68742 15.334 6.77075C15.3236 6.83325 15.3444 7.02075 15.334 7.16659Z" fill="#3F7EE8"/>
                        </svg>
                        <span>@olena_sv</span>
                    </div>
                    <div className="linkedin">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7917 0.125C17.3442 0.125 17.8741 0.344493 18.2648 0.735194C18.6555 1.12589 18.875 1.6558 18.875 2.20833V16.7917C18.875 17.3442 18.6555 17.8741 18.2648 18.2648C17.8741 18.6555 17.3442 18.875 16.7917 18.875H2.20833C1.6558 18.875 1.12589 18.6555 0.735194 18.2648C0.344493 17.8741 0.125 17.3442 0.125 16.7917V2.20833C0.125 1.6558 0.344493 1.12589 0.735194 0.735194C1.12589 0.344493 1.6558 0.125 2.20833 0.125H16.7917ZM16.2708 16.2708V10.75C16.2708 9.84937 15.9131 8.98563 15.2762 8.34878C14.6394 7.71194 13.7756 7.35417 12.875 7.35417C11.9896 7.35417 10.9583 7.89583 10.4583 8.70833V7.55208H7.55208V16.2708H10.4583V11.1354C10.4583 10.3333 11.1042 9.67708 11.9062 9.67708C12.293 9.67708 12.664 9.83073 12.9374 10.1042C13.2109 10.3777 13.3646 10.7486 13.3646 11.1354V16.2708H16.2708ZM4.16667 5.91667C4.6308 5.91667 5.07591 5.73229 5.4041 5.4041C5.73229 5.07591 5.91667 4.6308 5.91667 4.16667C5.91667 3.19792 5.13542 2.40625 4.16667 2.40625C3.69978 2.40625 3.25201 2.59172 2.92186 2.92186C2.59172 3.25201 2.40625 3.69978 2.40625 4.16667C2.40625 5.13542 3.19792 5.91667 4.16667 5.91667ZM5.61458 16.2708V7.55208H2.72917V16.2708H5.61458Z" fill="#3F7EE8"/>
                        </svg>
                        <span>@olena_sv</span>
                    </div>
                    <div className="button-contact" onMouseEnter={changeColor} onMouseLeave={changeColor}>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3283 11.5C10.3283 11.8108 10.4517 12.1089 10.6715 12.3286C10.8913 12.5484 11.1893 12.6719 11.5001 12.6719C11.8109 12.6719 12.109 12.5484 12.3288 12.3286C12.5485 12.1089 12.672 11.8108 12.672 11.5C12.672 11.1892 12.5485 10.8911 12.3288 10.6714C12.109 10.4516 11.8109 10.3281 11.5001 10.3281C11.1893 10.3281 10.8913 10.4516 10.6715 10.6714C10.4517 10.8911 10.3283 11.1892 10.3283 11.5ZM15.2111 11.5C15.2111 11.8108 15.3345 12.1089 15.5543 12.3286C15.7741 12.5484 16.0721 12.6719 16.3829 12.6719C16.6938 12.6719 16.9918 12.5484 17.2116 12.3286C17.4314 12.1089 17.5548 11.8108 17.5548 11.5C17.5548 11.1892 17.4314 10.8911 17.2116 10.6714C16.9918 10.4516 16.6938 10.3281 16.3829 10.3281C16.0721 10.3281 15.7741 10.4516 15.5543 10.6714C15.3345 10.8911 15.2111 11.1892 15.2111 11.5ZM5.44545 11.5C5.44545 11.8108 5.56892 12.1089 5.78868 12.3286C6.00845 12.5484 6.30653 12.6719 6.61733 12.6719C6.92813 12.6719 7.2262 12.5484 7.44597 12.3286C7.66574 12.1089 7.7892 11.8108 7.7892 11.5C7.7892 11.1892 7.66574 10.8911 7.44597 10.6714C7.2262 10.4516 6.92813 10.3281 6.61733 10.3281C6.30653 10.3281 6.00845 10.4516 5.78868 10.6714C5.56892 10.8911 5.44545 11.1892 5.44545 11.5ZM21.588 7.26172C21.0363 5.95068 20.2453 4.77393 19.237 3.76318C18.2357 2.75832 17.0471 1.95955 15.7384 1.41211C14.3956 0.848145 12.9699 0.5625 11.5001 0.5625H11.4513C9.97182 0.569824 8.53871 0.862793 7.19106 1.43896C5.8936 1.99202 4.71613 2.7922 3.72426 3.79492C2.72572 4.80322 1.94203 5.9751 1.40004 7.28125C0.838517 8.63379 0.555314 10.0718 0.562639 11.5513C0.570923 13.2468 0.972042 14.9173 1.73451 16.4316V20.1426C1.73451 20.4404 1.85283 20.7261 2.06345 20.9367C2.27406 21.1473 2.55971 21.2656 2.85756 21.2656H6.57094C8.08533 22.0281 9.75582 22.4292 11.4513 22.4375H11.5026C12.965 22.4375 14.3834 22.1543 15.7189 21.6001C17.0209 21.0592 18.2051 20.2697 19.2052 19.2759C20.2135 18.2773 21.007 17.1104 21.5612 15.8091C22.1373 14.4614 22.4303 13.0283 22.4376 11.5488C22.445 10.062 22.1569 8.61914 21.588 7.26172ZM17.8991 17.9551C16.1876 19.6494 13.9171 20.582 11.5001 20.582H11.4586C9.98647 20.5747 8.52406 20.2085 7.23256 19.52L7.02748 19.4102H3.58998V15.9727L3.48012 15.7676C2.79164 14.4761 2.42543 13.0137 2.41811 11.5415C2.40834 9.10742 3.33852 6.82227 5.04506 5.10107C6.74916 3.37988 9.02699 2.42773 11.4611 2.41797H11.5026C12.7233 2.41797 13.9074 2.65478 15.0231 3.12353C16.112 3.58008 17.0885 4.23682 17.9284 5.07666C18.7658 5.91406 19.4249 6.89307 19.8815 7.98193C20.3551 9.10986 20.5919 10.3062 20.5871 11.5415C20.5724 13.9731 19.6178 16.251 17.8991 17.9551Z" fill={colorSvg}/>
                        </svg>
                        <span>Зв'язатися</span>
                    </div>
                    <label for="file-upload" className="upload-cv">
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.584 1.125V5.29167C10.584 5.56793 10.6937 5.83289 10.8891 6.02824C11.0844 6.22359 11.3494 6.33333 11.6257 6.33333H15.7923" stroke="#3F7EE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.709 19.875H3.29232C2.73978 19.875 2.20988 19.6555 1.81918 19.2648C1.42848 18.8741 1.20898 18.3442 1.20898 17.7917V3.20833C1.20898 2.6558 1.42848 2.12589 1.81918 1.73519C2.20988 1.34449 2.73978 1.125 3.29232 1.125H10.584L15.7923 6.33333V17.7917C15.7923 18.3442 15.5728 18.8741 15.1821 19.2648C14.7914 19.6555 14.2615 19.875 13.709 19.875Z" stroke="#3F7EE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.45898 11.0208C7.45898 10.6064 7.29436 10.2089 7.00134 9.9159C6.70831 9.62287 6.31089 9.45825 5.89648 9.45825C5.48208 9.45825 5.08466 9.62287 4.79163 9.9159C4.4986 10.2089 4.33398 10.6064 4.33398 11.0208V14.1458C4.33398 14.5602 4.4986 14.9576 4.79163 15.2506C5.08466 15.5436 5.48208 15.7083 5.89648 15.7083C6.31089 15.7083 6.70831 15.5436 7.00134 15.2506C7.29436 14.9576 7.45898 14.5602 7.45898 14.1458M9.54232 9.45825L11.1048 15.7083L12.6673 9.45825" stroke="#3F7EE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Завантажити CV</span>
                        <input type="file" id="file-upload" />
                    </label>
            </div>
        </div>
    );
}

export default ContactData;
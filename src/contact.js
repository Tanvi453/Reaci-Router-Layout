import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();

    return (
        <>

            <div className='flex justify-between p-7' >

                <div className='flex gap-x-5'>

                    <img className='h-10 mt-2.5' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkjuHVHDY9uyD7N70Vxj6xKStXssHCVNUVwiXFl6Uo5RGin6d7" alt='' />

                    <div className='flex flex-col gap-y-2' >
                        <a href='https://www.wix.com/demone2/choos-equality' className='text-blue text-[25px] no-underline font-[fantasy]'>ChoosEquality</a>
                        <a href='https://www.wix.com/demone2/choos-equality' className='text-blue text-[15px] no-underline'>Education for All</a>
                    </div>

                </div>

                <div className='flex gap-[50px] h-5 mt-5' >
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/')}>Home</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/about')}>About</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/projects')}>Projects</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/team')}>Team</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/news')}>News</button>
                    <button className='border-0 bg-transparent text-purple' onClick={() => navigate('/contact')}>Contact</button>
                </div>

            </div>

            <div className='flex flex-col items-center'>

                <img src='https://static.wixstatic.com/media/0b340f_a5c250a81aed4d7fa68e005cff2132c8~mv2_d_3840_1960_s_2.jpg/v1/fill/w_1903,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_a5c250a81aed4d7fa68e005cff2132c8~mv2_d_3840_1960_s_2.jpg' alt='' className='w-[100vw]' />

                <div className='bg-white w-[90vw] mt-[-5%] flex flex-col justify-center items-center text-blue pb-[50px]'>

                    <div>
                        <p className='font-[fantasy] text-[55px] tracking-wider text-center'>Contact Us</p>
                    </div>

                    <div className='flex flex-col m-auto'>

                        <div className='flex justify-start'>
                            <h2>Volunteer</h2>
                        </div>

                        <div className='bg-white h-[514px] w-[922px] border-[5px] border-solid border-blue flex flex-col gap-[30px] justify-center items-center p-2.5'>

                            <div className='flex gap-[30px]'>

                                <div className='flex flex-col gap-2.5'>
                                    <label htmlFor="fname">First Name*</label>
                                    <input className='disha bg-[transparent] h-[30px] w-[400px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="text" name="fname" id="fname" required />
                                </div>

                                <div className='flex flex-col gap-2.5'>
                                    <label htmlFor="lname">Last Name</label>
                                    <input className='disha bg-[transparent] h-[30px] w-[400px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="text" name="lname" id="lname" required />
                                </div>

                            </div>

                            <div className='flex gap-[30px]'>

                                <div className='flex flex-col gap-2.5'>
                                    <label htmlFor="email">Email*</label>
                                    <input className='disha bg-[transparent] h-[30px] w-[400px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="email" name="email" id="email" required />
                                </div>

                                <div className='flex flex-col gap-2.5'>
                                    <label htmlFor="phone">Phone</label>
                                    <input className='disha bg-[transparent] h-[30px] w-[400px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="phone" name="phone" id="phone" required />
                                </div>

                            </div>

                            <div className='flex flex-col gap-[30px]'>
                                <label htmlFor="address">Address*</label>
                                <input className='disha bg-[transparent] h-[30px] w-[840px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="text" name="address" id="address" required />
                            </div>

                            <button className="shyam bg-blue text-white h-[90px] w-[840px] border-none text-[25px] font-[fantasy] tracking-widest mt-5" type="button">APPLY</button>

                        </div>

                    </div>

                    <div className='flex flex-col m-auto'>

                        <div className='flex justify-start'>
                            <h2>Partner</h2>
                        </div>

                        <div className='bg-white h-[514px] w-[922px] border-[5px] border-solid border-blue flex flex-col gap-[30px] justify-center items-center p-2.5'>

                            <div className='flex gap-[30px]'>

                                <div className='flex flex-col gap-2.5'>
                                    <label htmlFor="Company">Company</label>
                                    <input className='disha bg-[transparent] h-[30px] w-[400px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="text" name="Company" id="Company" required />
                                </div>

                                <div className='flex flex-col gap-2.5'>
                                    <label htmlFor="lname">Point of Contact</label>
                                    <input className='disha bg-[transparent] h-[30px] w-[400px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="text" name="lname" id="lname" required />
                                </div>

                            </div>

                            <div className='flex gap-[30px]'>

                                <div className='flex flex-col gap-2.5'>
                                    <label htmlFor="email">Address</label>
                                    <input className='disha bg-[transparent] h-[30px] w-[400px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="email" name="email" id="email" required />
                                </div>

                                <div className='flex flex-col gap-2.5'>
                                    <label htmlFor="phone">Phone*</label>
                                    <input className='disha bg-[transparent] h-[30px] w-[400px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="phone" name="phone" id="phone" required />
                                </div>

                            </div>

                            <div className='flex flex-col gap-[30px]'>
                                <label htmlFor="address">Social Media Links</label>
                                <input className='disha bg-[transparent] h-[30px] w-[840px] border-[1px] border-blue border-solid border-x-0 border-t-0' type="text" name="address" id="address" required />
                            </div>

                            <button className="shyam bg-blue text-white h-[90px] w-[840px] border-none text-[25px] font-[fantasy] tracking-widest mt-5" type="button">SUBMIT</button>

                        </div>

                    </div>

                    <div className='flex flex-col m-auto'>

                        <div className='flex justify-start'>
                            <h2>Contribute</h2>
                        </div>

                        <div className='bg-white h-[300px] w-[922px] border-[5px] border-solid border-blue flex flex-col gap-[30px] justify-center items-center p-2.5'>

                            <div className='flex flex-col gap-[30px]'>

                                <p className='font-[fantasy] text-[40px] tracking-wider m-0'>Take a part and help us grow</p>
                                <button className="shyam bg-blue text-white h-[90px] w-[840px] border-none text-[25px] font-[fantasy] tracking-widest mt-5" type="button">SUBMIT</button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className='flex justify-center mt-[8%]'>

                <div className='bg-blue h-[400px] w-[45vw] flex gap-[100px] justify-center items-center p-[120px]'>

                    <div className='text-white flex flex-col gap-[20px]'>

                        <p className='font-[fantasy] text-[40px] tracking-wide'>CONTACT US</p>
                        <p>I'm a paragraph. Click here to add<br></br> your own text and edit me.</p>
                        <p>Registered Charity: 12345-67</p>
                        <div className='bg-white h-0.5 w-80'></div>
                        <a href='info@mysite.com' className='text-white font-[fantasy] text-4xl tracking-wide no-underline'>info@mysite.com</a>
                        <div className='flex gap-5'>
                            <a href='https://www.facebook.com/wix'><img src='https://static.wixstatic.com/media/e0678ef25486466ba65ef6ad47b559e1.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0678ef25486466ba65ef6ad47b559e1.png' alt='' /></a>
                            <a href='https://www.youtube.com/user/Wix'><img src='https://static.wixstatic.com/media/e9bb463a1bc4434c9d33b81b1fe937f5.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e9bb463a1bc4434c9d33b81b1fe937f5.png' alt='' /></a>
                            <a href='https://www.pinterest.com/wixcom/'><img src='https://static.wixstatic.com/media/f61c7a3b4b4947b28511a25034973383.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61c7a3b4b4947b28511a25034973383.png' alt='' /></a>
                        </div>

                    </div>

                    <div className='text-white flex flex-col gap-5'>

                        <p className='mt-[25%]'>500 Terry Francine Street <br></br>San Francisco, CA 94158</p>
                        <p>Phone: 1-800-000-0000</p>
                        <div className='bg-white h-0.5 w-52' ></div>

                    </div>

                </div>

                <div className='bg-[#f2f2f2] h-[400px] w-[20vw] flex justify-center items-center p-[120px]'>

                    <div className='flex flex-col gap-[30px] text-blue font-[fantasy] text-center'>

                        <p className='text-[35px] tracking-wider' >BE THE FIRST TO KNOW</p>
                        <p className='text-xl tracking-wider'>Sign up to our newsletter to<br></br> stay informed</p>
                        <input type="email" placeholder="E-mail" className='hit bg-transparent h-[30px] w-[330px] border-blue border-solid border-b-[1px] border-x-0 border-t-0 text-center'></input>
                        <p className="tanvi text-purple font-[fantasy] tracking-wider text-lg no-underline scroll-mt-5">Subscribe Now</p>

                    </div>

                </div>

            </div>

            <div className='flex justify-center items-center flex-col mt-5 mb-5'>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkjuHVHDY9uyD7N70Vxj6xKStXssHCVNUVwiXFl6Uo5RGin6d7" className='h-[30px] mt-2.5' alt='' />
                <p className='text-blue text-[13px]'>© 2035 ChoosEquality. Powered and secured by <a href="https://wix.com/?utm_campaign=vir_created_with" className='text-blue'>Wix</a></p>
            </div>

        </>
    )
}
export default Contact;
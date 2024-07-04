import { useNavigate } from 'react-router-dom';

function About() {
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
                    <button className='border-0 bg-transparent text-purple' onClick={() => navigate('/about')}>About</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/projects')}>Projects</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/team')}>Team</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/news')}>News</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/contact')}>Contact</button>
                </div>

            </div>

            <img src='https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_1903,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg' alt='' className='w-[100vw]' />

            <div className='flex flex-col items-center'>

                <div className='bg-white h-[600px] w-[90vw] mt-[-5%] flex flex-col justify-center items-center text-center text-blue pb-[50px]'>

                    <p className='font-[fantasy] text-5xl tracking-wider'>About ChoosEquality</p>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or<br></br> double click me to add your own content and make changes to the font. Feel free to drag and<br></br> drop me anywhere you like on your page. I'm a great place for you to tell a story and let your<br></br> users know a little more about you.</p>
                    <p>This is a great space to write a long text about your company and your services. You can use<br></br> this space to go into a little more detail about your company. Talk about your team and what<br></br> services you provide. Tell your visitors the story of how you came up with the idea for your<br></br> business and what makes you different from your competitors. Make your company stand out<br></br> and show your visitors who you are.</p>

                    <div className='flex gap-[30px] mt-[5%]'>

                        <a href='https://www.wix.com/templateslp/links'><button className="shyam bg-blue text-white h-[60px] w-[280px] border-0 text-xl font-[fantasy] tracking-wider">2035 Financial Statement</button></a>
                        <a href='https://www.wix.com/templateslp/links'><button className="shyam bg-blue text-white h-[60px] w-[280px] border-0 text-xl font-[fantasy] tracking-wider">Certification Registry</button></a>

                    </div>

                </div>

                <div className='mt-[5%] flex flex-col justify-center items-center text-center'>

                    <p className='text-blue font-[fantasy] tracking-wider text-[50px]'>Our Goals</p>

                    <div className='flex mt-[10%] gap-[280px]'>

                        <div className='flex flex-col items-center'>

                            <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmoQbhVHegM25GZ-ruk1tEmHazfEqX1LB5tqnHkaPM0oWueRRD' alt='' className='h-[150px] w-[150px] rounded-full' />
                            <p className='text-blue font-[fantasy] tracking-wider text-xl'>Spread empathy<br></br>
                                through education</p>

                        </div>

                        <div className='flex flex-col items-center'>

                            <img src='https://careers.jobvite.com/drreddy/11.png' alt='' className='h-[150px] w-[150px] rounded-full' />
                            <p className='text-blue font-[fantasy] tracking-wider text-lg'>Increase donations equally<br></br> across 24 countries</p>


                        </div>

                        <div className='flex flex-col items-center'>

                            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQHybOU4aIc3ceAIGh1A48A1owaIUV_b923bwC9neWSX_3DjKCj' alt='' className='h-[150px] w-[150px] rounded-full' />
                            <p className='text-blue font-[fantasy] tracking-wider text-lg'>Help more children and teens<br></br> graduate from high school</p>


                        </div>

                    </div>

                </div>

                <div className='mt-[8%]'>

                    <div className='flex gap-[50px]'>

                        <div className='flex flex-col gap-[50px]'>

                            <div className='flex gap-[50px]'>
                                <img src='https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_709,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg' className='h-[400px] w-[550px]' alt='' />
                                <img src='https://www.ladybirdeducation.co.uk/wp-content/uploads/2019/07/accurate-boy-build-298825.jpg' className='h-[400px] w-[300px]' alt='' />
                            </div>

                            <img src='https://static.wixstatic.com/media/11062b_5f5c6e4fa60c4e86ab64ce50195d304a~mv2_d_3491_2327_s_2.jpg/v1/fill/w_1508,h_395,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_5f5c6e4fa60c4e86ab64ce50195d304a~mv2_d_3491_2327_s_2.jpg' alt='' className='h-[500px] w-[900px]' />

                        </div>

                        <div className='flex flex-col gap-[50px]'>
                            <img src='https://static.wixstatic.com/media/11062b_21261646ea7d41c09e7d730cf2cec53b~mv2_d_8660_5773_s_4_2.jpg/v1/fill/w_940,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Girl%20with%20Teacher.jpg' className='h-[450px] w-[780px]' alt='' />
                            <img src='https://miro.medium.com/v2/resize:fit:720/format:webp/0*w78UfEbpXWtNsnIV' className='h-[450px] w-[780px]' alt='' />
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

export default About;
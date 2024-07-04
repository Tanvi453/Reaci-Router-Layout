import { useNavigate } from 'react-router-dom';

function News() {
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
                    <button className='border-0 bg-transparent text-purple' onClick={() => navigate('/news')}>News</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/contact')}>Contact</button>
                </div>

            </div>

            <div className='flex flex-col items-center'>

                <img src='https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1903,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg' alt='' style={{ width: "100vw" }} />

                <div className='bg-white w-[90vw] mt-[-5%] flex flex-col justify-center items-center text-center text-blue pb-[50px]'>

                    <p className='font-[fantasy] text-[50px] tracking-wider'>News & Updates</p>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit<br></br> Text” or double click me to add your own content and make changes to the font.</p>

                </div>

            </div>

            <div className='flex flex-col items-center gap-[50px] mt-[3%]'>

                <div className='flex justify-center gap-[50px]'>

                    <div className='flex flex-col border-solid border-[lightgrey] border h-[700px] w-[450px] text-blue'>

                        <img src='https://static.wixstatic.com/media/84770f_6b46ae803eca48f498cf43536e30e64f~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div>
                            <div className='flex justify-center items-center bg-blue h-10 w-[200px] text-white text-[17px] mt-[-5%]'>Jun 1, 2023</div>
                        </div>

                        <div className='flex flex-col gap-5 px-8 pb-8 pt-4'>
                            <p className='font-[fantasy] text-[18px] tracking-widest'>10 Reasons Why School Uniform Matter</p>
                            <p>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] tracking-wider mt-[30px] text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/news-and-updates/10-reasons-why-school-uniform-matter">Read More</a>
                        </div>

                    </div>

                    <div className='flex flex-col border-solid border-[lightgrey] border h-[700px] w-[450px] text-blue'>

                        <img src='https://static.wixstatic.com/media/84770f_4ae8f1ff8ff9489daf727ab6b88d0414~mv2_d_4240_2832_s_4_2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div>
                            <div className='flex justify-center items-center bg-blue h-10 w-[200px] text-white text-[17px] mt-[-5%]'>Nov 1, 2023</div>
                        </div>

                        <div className='flex flex-col gap-5 px-8 pb-8 pt-4'>
                            <p className='font-[fantasy] text-[18px] tracking-widest'>The Role of Sports in the Education System</p>
                            <p>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] tracking-wider mt-[30px] text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/news-and-updates/the-role-of-sports-in-the-education-system">Read More</a>
                        </div>

                    </div>

                    <div className='flex flex-col border-solid border-[lightgrey] border h-[700px] w-[450px] text-blue'>

                        <img src='https://static.wixstatic.com/media/84770f_e9b1a996de0049e99df46af2a64895fd~mv2_d_4446_3334_s_4_2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div>
                            <div className='flex justify-center items-center bg-blue h-10 w-[200px] text-white text-[17px] mt-[-5%]'>Oct 1, 2023</div>
                        </div>

                        <div className='flex flex-col gap-5 px-8 pb-8 pt-4'>
                            <p className='font-[fantasy] text-[18px] tracking-widest'>Protecting Our Children's Privacy</p>
                            <p>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] tracking-wider mt-[30px] text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/news-and-updates/protecting-our-children's-privacy">Read More</a>
                        </div>

                    </div>

                </div>

                <div className='flex justify-center gap-[50px]'>

                    <div className='flex flex-col border-solid border-[lightgrey] border h-[700px] w-[450px] text-blue'>

                        <img src='https://static.wixstatic.com/media/84770f_3472f565af6749eb81d28318b1edf5f4~mv2_d_4505_3003_s_4_2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div>
                            <div className='flex justify-center items-center bg-blue h-10 w-[200px] text-white text-[17px] mt-[-5%]'>May 1, 2023</div>
                        </div>

                        <div className='flex flex-col gap-5 px-8 pb-8 pt-4'>
                            <p className='font-[fantasy] text-[18px] tracking-widest'>Spring 2023 High School Curriculum</p>
                            <p>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] tracking-wider mt-[30px] text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/news-and-updates/spring-2023-high-school-curriculum">Read More</a>
                        </div>

                    </div>

                    <div className='flex flex-col border-solid border-[lightgrey] border h-[700px] w-[450px] text-blue'>

                        <img src='https://static.wixstatic.com/media/84770f_cc96ed8fbbcb4027aba8dc721e16e05e~mv2_d_3617_5425_s_4_2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div>
                            <div className='flex justify-center items-center bg-blue h-10 w-[200px] text-white text-[17px] mt-[-5%]'>Aug 1, 2023</div>
                        </div>

                        <div className='flex flex-col gap-5 px-8 pb-8 pt-4'>
                            <p className='font-[fantasy] text-[18px] tracking-widest'>Recent Classrooms Renovations</p>
                            <p>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] tracking-wider mt-[30px] text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/news-and-updates/recent-classrooms-renovations">Read More</a>
                        </div>

                    </div>

                    <div className='flex flex-col border-solid border-[lightgrey] border h-[700px] w-[450px] text-blue'>

                        <img src='https://static.wixstatic.com/media/84770f_458848f186934814ab7cb57819eade1c~mv2_d_2000_1333_s_2.jpg/v1/fill/w_442,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div>
                            <div className='flex justify-center items-center bg-blue h-10 w-[200px] text-white text-[17px] mt-[-5%]'>Jul 1, 2023</div>
                        </div>

                        <div className='flex flex-col gap-5 px-8 pb-8 pt-4'>
                            <p className='font-[fantasy] text-[18px] tracking-widest'>New Auditorium Launched in Luanda</p>
                            <p>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] tracking-wider mt-[30px] text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/news-and-updates/protecting-our-children's-privacy">Read More</a>
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
export default News;
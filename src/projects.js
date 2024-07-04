import { useNavigate } from 'react-router-dom';

function Projects() {
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
                    <button className='border-0 bg-transparent text-purple' onClick={() => navigate('/projects')}>Projects</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/team')}>Team</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/news')}>News</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/contact')}>Contact</button>
                </div>

            </div>

            <div className='flex flex-col items-center'>

                <img src='https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1903,h_492,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg' alt='' className='w-[100vw]' />

                <div className='bg-white w-[90vw] mt-[-5%] flex flex-col justify-center items-center text-center text-blue pb-[50px]'>

                    <p className='font-[fantasy] text-[50px] tracking-wider'>Our Projects</p>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to<br></br> add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your<br></br> page. I'm a great place for you to tell a story and let your users know a little more about you.</p>

                </div>

                <div className='flex gap-[100px] mt-[50px]'>

                    <div className='flex flex-col items-center text-blue' >

                        <img src='https://static.wixstatic.com/media/84770f_878098e5beb14c1aadfe0539d9ac7f82~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_377,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' className='h-[350px] w-[380px]' alt='' />

                        <div className='bg-white h-[300px] w-[270px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-15%] flex flex-col items-center text-center p-[5px]'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Annual Tech Challenge</p>
                            <p className='mt-[30px]'>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] mt-[30px] tracking-wider text-xl no-underline" href="hhttps://www.wix.com/demone2/choos-equality/our-projects/annual-tech-challenge">Read More</a>

                        </div>

                    </div>

                    <div className='flex flex-col items-center text-[#2859b6]'>
                        <img src='https://static.wixstatic.com/media/0b340f_12ead601f2dc4867a7bf09ce72ebad64~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_377,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' className='h-[350px] w-[380px]' alt='' />

                        <div className='bg-white h-[300px] w-[270px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-15%] flex flex-col items-center text-center p-[5px]'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Adopt a Student</p>
                            <p className='mt-[30px]'>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] mt-[30px] tracking-wider text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/our-projects/adopt-a-student" >Read More</a>

                        </div>
                    </div>

                    <div className='flex flex-col items-center text-[#2859b6]'>

                        <img src='https://static.wixstatic.com/media/84770f_02295d8cd2e24277aa38c26a150c3aaa~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_377,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpeg' className='flex flex-col items-center text-blue' alt='' />

                        <div className='bg-white h-[300px] w-[270px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-15%] flex flex-col items-center text-center p-[5px]'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Transportation for Youth</p>
                            <p className='mt-[30px]'>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] mt-[30px] tracking-wider text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/our-projects/transportation-for-youth">Read More</a>

                        </div>

                    </div>

                </div>

                <div className='flex gap-[100px] mt-[8%]'>

                    <div className='flex flex-col items-center text-blue'>

                        <img src='https://static.wixstatic.com/media/84770f_8728d6e0d6404b9d97f1ccdbd30ffe3c~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_377,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' className='h-[350px] w-[380px]' alt='' />

                        <div className='bg-white h-[300px] w-[270px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-15%] flex flex-col items-center text-center p-[5px]'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Annual Tech Challenge</p>
                            <p className='mt-[30px]'>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] mt-[30px] tracking-wider text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/our-projects/english-for-all">Read More</a>

                        </div>

                    </div>

                    <div className='flex flex-col items-center text-blue'>

                        <img src='https://static.wixstatic.com/media/84770f_6e4797d2cf2b488fadc208485986bfdd~mv2_d_4395_2933_s_4_2.jpg/v1/fill/w_377,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' className='h-[350px] w-[380px]' alt='' />

                        <div className='bg-white h-[300px] w-[270px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-15%] flex flex-col items-center text-center p-[5px]'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Adopt a Student</p>
                            <p className='mt-[30px]'>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] mt-[30px] tracking-wider text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/our-projects/literacy-development">Read More</a>

                        </div>

                    </div>

                    <div className='flex flex-col items-center text-blue'>

                        <img src='https://static.wixstatic.com/media/84770f_ddc98b458d844f6a977fe99bf1fec22a~mv2_d_4335_6502_s_4_2.jpg/v1/fill/w_377,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' className='h-[350px] w-[380px]' alt='' />

                        <div className='bg-white h-[300px] w-[270px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-15%] flex flex-col items-center text-center p-[5px]'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Transportation for Youth</p>
                            <p className='mt-[30px]'>This item is connected to a text field in your content collection. Double click to add your own content. Click the Content Manager icon on the add panel to your left.</p>
                            <a className="tanvi text-purple font-[fantasy] mt-[30px] tracking-wider text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/our-projects/tolerance-and-fair-play">Read More</a>

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
export default Projects;
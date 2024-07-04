import { useNavigate } from 'react-router-dom';


function Team() {
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
                    <button className='border-0 bg-transparent text-purple' onClick={() => navigate('/team')}>Team</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/news')}>News</button>
                    <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/contact')}>Contact</button>
                </div>

            </div>

            <div className='flex flex-col items-center'>

                <img src='https://static.wixstatic.com/media/0b340f_a7d86f6369354017b7d641b8f7269f10~mv2_d_7075_4717_s_4_2.jpg/v1/fill/w_1903,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_a7d86f6369354017b7d641b8f7269f10~mv2_d_7075_4717_s_4_2.jpg' alt='' style={{ width: "100vw" }} />

                <div className='bg-white w-[90vw] mt-[-5%] flex flex-col justify-center items-center text-center text-blue pb-[50px]'>

                    <p className='font-[fantasy] text-[50px] tracking-wider'>Our Team</p>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to<br></br> add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your<br></br> page. I'm a great place for you to tell a story and let your users know a little more about you.</p>

                </div>

                <div className='flex justify-center gap-[100px] mt-10'>

                    <div className='flex flex-col items-center text-blue text-center'>

                        <img src='https://static.wixstatic.com/media/84770f_bc8a00b8393b4497979a2e467e84a3c2~mv2_d_4821_3252_s_4_2.jpg/v1/fill/w_261,h_359,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div className='bg-white h-[60px] w-[180px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-10%] flex flex-col items-center text-center'>
                            <p className='font-[fantasy] text-xl tracking-wider'>James Hogan</p>
                        </div>

                        <div className='flex flex-col gap-10'>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>
                        </div>

                    </div>

                    <div className='flex flex-col items-center text-blue text-center'>

                        <img src='https://static.wixstatic.com/media/84770f_ac86c334b3ab4cbd95b5f23d870a1646~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_261,h_359,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div className='bg-white h-[60px] w-[180px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-10%] flex flex-col items-center text-center'>
                            <p className='font-[fantasy] text-xl tracking-wider'>Nitin Chet</p>
                        </div>

                        <div className='flex flex-col gap-10'>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>
                        </div>

                    </div>

                    <div className='flex flex-col items-center text-blue text-center'>

                        <img src='https://static.wixstatic.com/media/84770f_7659769faf854aebb27ff143721ea13c~mv2_d_6720_4480_s_4_2.jpg/v1/fill/w_261,h_359,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div className='bg-white h-[60px] w-[180px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-10%] flex flex-col items-center text-center'>
                            <p className='font-[fantasy] text-xl tracking-wider'>Jeanette Dhay</p>
                        </div>

                        <div className='flex flex-col gap-10'>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>
                        </div>

                    </div>

                    <div className='flex flex-col items-center text-blue text-center'>

                        <img src='https://static.wixstatic.com/media/84770f_379c133dca1f42d6ade23ac6a1c0e0c2~mv2_d_6038_4140_s_4_2.jpg/v1/fill/w_261,h_359,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg' alt='' />

                        <div className='bg-white h-[60px] w-[180px] border-blue border-solid border-t-[5px] border-x-0 border-b-0 mt-[-10%] flex flex-col items-center text-center'>
                            <p className='font-[fantasy] text-xl tracking-wider'>Katie Franklin</p>
                        </div>

                        <div className='flex flex-col gap-10'>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>
                        </div>

                    </div>

                </div>

                <div className='flex flex-col items-center text-blue text-center mt-[6%]'>

                    <p className='font-[fantasy] text-xl tracking-wider'>Our Volunteers</p>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to<br></br> add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your<br></br> page. I'm a great place for you to tell a story and let your users know a little more about you.</p>

                    <div className='flex gap-[80px] text-center mt-[5%]'>

                        <div className='flex flex-col gap-2.5'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Alice Boldwin</p>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>

                        </div>

                        <div className='flex flex-col gap-2.5'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Darrell Kennedy</p>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>

                        </div>

                        <div className='flex flex-col gap-2.5'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Derek Castillo</p>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>

                        </div>

                        <div className='flex flex-col gap-2.5'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Harvey Holmes</p>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>

                        </div>

                    </div>

                    <div className='flex gap-[80px] text-center mt-[8%]'>

                        <div className='flex flex-col gap-2.5'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Kelvin Boone</p>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>

                        </div>

                        <div className='flex flex-col gap-2.5'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Martin Scott</p>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>

                        </div>

                        <div className='flex flex-col gap-2.5'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Sonya Harper</p>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>

                        </div>

                        <div className='flex flex-col gap-2.5'>

                            <p className='font-[fantasy] text-xl tracking-wider'>Tracy Spencer</p>
                            <p>This item is connected to a text field in<br></br> your content collection. Double click<br></br> to add your own content.</p>
                            <a href='info@mysite.com' className='text-blue text-[18px] no-underline font-bold'>info@mysite.com</a>

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
export default Team;

import './App.css';
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
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
          <button className='border-0 bg-transparent text-purple' onClick={() => navigate('/')}>Home</button>
          <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/about')}>About</button>
          <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/projects')}>Projects</button>
          <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/team')}>Team</button>
          <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/news')}>News</button>
          <button className='savi border-0 bg-transparent text-blue' onClick={() => navigate('/contact')}>Contact</button>
        </div>

      </div>

      <div className='flex flex-col items-center' >

        <div className='flex flex-col justify-center items-center bg-[url(https://static.wixstatic.com/media/0b340f_b4aaabafff194cf6ac9ee5511f58099df000.jpg/v1/fill/w_1743,h_670,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/0b340f_b4aaabafff194cf6ac9ee5511f58099df000.jpg)] h-[670px] w-[90%]' >

          <p className='text-white text-[50px] font-[fantasy] tracking-wider'>FREE & ACCESSIBLE</p>
          <p className='text-white text-[110px] mt-[-50px] font-[fantasy] tracking-wider'>EDUCATION FOR ALL</p>

        </div>

        <div className='bg-white h-[90px] w-[900px] flex justify-between mt-[-2.5%] border-blue border-solid border-t-[5px] border-x-0 border-b-0' >

          <h1 className='text-blue font-inherit ml-[30px]' >Take action to help us grow</h1>
          <a href='https://www.wix.com/demone2/choos-equality/contact'><button className="shyam bg-blue text-white h-[90px] w-[200px] border-none text-[25px] font-[inherit] font-bold">DONATE</button></a>

        </div>

      </div>

      <div className='flex gap-[30px] justify-center mt-[8%]'>

        <div className='bg-[url(https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_709,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg)] h-[460px] w-[710px]'>

          <div className='bg-white h-[400px] w-[280px] mt-[18%] flex flex-col gap-[20px] justify-center items-center text-blue border-blue border-solid border-t-[5px] border-x-0 border-b-0'>

            <p className='font-[fantasy] text-[30px] tracking-wider mt-[-3%]'>Our Initiatives</p>
            <p className='mt-[-3%]'>I'm a paragraph. Click<br></br> here to add your own text<br></br> and edit me. It's easy. Just<br></br> click “Edit Text” or double<br></br> click me to add your own<br></br> content and make<br></br> changes to the font.</p>
            <a className="tanvi text-purple font-[fantasy] mt-2.5 mr-[30%] tracking-wide text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/projects">Read More</a>

          </div>

        </div>

        <div className='bg-[url(https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_1004,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg)] h-[460px] w-[1000px]' >

          <div className='bg-white h-[400px] w-[280px] mt-[-5%] ml-[10%] flex flex-col gap-[20px] justify-center items-center text-[#2859b6] border-blue border-solid border-t-[5px] border-x-0 border-b-0'>

            <p className='font-[fantasy] text-[30px] tracking-wider mt-[-3%] mr-[10%]'>Our Mission</p>
            <p className='mt-[-3%]'>I'm a paragraph. Click<br></br> here to add your own text<br></br> and edit me. It's easy. Just<br></br> click “Edit Text” or double<br></br> click me to add your own<br></br> content and make<br></br> changes to the font.</p>
            <a className="tanvi text-purple font-[fantasy] mt-2.5 mr-[30%] tracking-wide text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/about">Read More</a>

          </div>

        </div>

      </div>

      <div className='flex gap-[30px] justify-center mt-[8%]'>

        <div className='bg-[url(https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1001,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg)] h-[560px] w-[1000px] flex justify-end'>

          <div className='bg-white h-[400px] w-[280px] mt-[23%] mr-[12%] flex flex-col gap-[20px] justify-center items-center text-blue border-blue border-solid border-t-[5px] border-x-0 border-b-0'>

            <p className='font-[fantasy] text-[30px] tracking-wider mt-[-3%] mr-[10px]'>Recent News</p>
            <p className='mt-[-3%]'>I'm a paragraph. Click<br></br> here to add your own text<br></br> and edit me. It's easy. Just<br></br> click “Edit Text” or double<br></br> click me to add your own<br></br> content and make<br></br> changes to the font.</p>
            <a className="tanvi text-purple font-[fantasy] mt-2.5 mr-[30%] tracking-wide text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/projects" >Read More</a>

          </div>

        </div>

        <div className='bg-[url(https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_712,h_568,al_tr,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg)] h-[560px] w-[710px] flex justify-end'>

          <div className='bg-white h-[400px] w-[280px] mt-[-8%] mr-[12%] flex flex-col gap-[20px] justify-center items-center text-blue border-blue border-solid border-t-[5px] border-x-0 border-b-0'>

            <p className='font-[fantasy] text-[30px] tracking-wider mt-[-3%] mr-[20%]'>Take Part</p>
            <p className='mt-[-3%]'>I'm a paragraph. Click<br></br> here to add your own text<br></br> and edit me. It's easy. Just<br></br> click “Edit Text” or double<br></br> click me to add your own<br></br> content and make<br></br> changes to the font.</p>
            <a className="tanvi text-purple font-[fantasy] mt-2.5 mr-[30%] tracking-wide text-xl no-underline" href="https://www.wix.com/demone2/choos-equality/about" >Read More</a>

          </div>

        </div>

      </div>

      <div className='flex flex-col items-center mt-[10%]'>

        <div className="flex gap-[30px]">

          <div className='waviy'>
            <span className="--i:1 font-[fantasy] tracking-wider">2</span>
            <span className="--i:2 font-[fantasy] tracking-wider">0</span>
            <span className="--i:3 font-[fantasy] tracking-wider">3</span>
            <span className="--i:4 font-[fantasy] tracking-wider">5</span>
          </div>

          <div className='waviy'>
            <span className="--i:5 font-[fantasy] tracking-wider">i</span>
            <span className="--i:6 font-[fantasy] tracking-wider">n</span>
          </div>

          <div className='waviy'>
            <span className="--i:7 font-[fantasy] tracking-wider">N</span>
            <span className="--i:8 font-[fantasy] tracking-wider">u</span>
            <span className="--i:9 font-[fantasy] tracking-wider">m</span>
            <span className="--i:10 font-[fantasy] tracking-wider">b</span>
            <span className="--i:11 font-[fantasy] tracking-wider">e</span>
            <span className="--i:12 font-[fantasy] tracking-wider">r</span>
            <span className="--i:13 font-[fantasy] tracking-wider">s</span>
          </div>

        </div>



        <div className='flex justify-center gap-[300px] mt-[10%]'>

          <div className='flex flex-col items-[self-end] relative'>

            <div>
              <p className='text-[220px] font-[fantasy] text-purple tracking-wider m-0'>40K</p>
            </div>
            <div className='bg-white w-[162px] border-purple border-solid border-t-[5px] border-x-0 border-b-0 pl-2.5 absolute top-[200px] right-[-20px]' >
              <h1 className='text-blue mt-[5%]'>Dollars Raised</h1>
            </div>

          </div>

          <div className='flex flex-col items-[self-end] relative'>

            <div>
              <p className='text-[220px] font-[fantasy] text-purple tracking-wider m-0'>8K</p>
            </div>
            <div className='bg-white w-[162px] border-purple border-solid border-t-[5px] border-x-0 border-b-0 pl-2.5 absolute top-[60px] left-[150px]'>
              <h1 className='text-blue'>Graduate Students</h1>
            </div>


          </div>

          <div className='flex flex-col items-[self-end] relative'>

            <div>
              <p className='text-[220px] font-[fantasy] text-purple tracking-wider m-0'>120</p>
            </div>
            <div className='bg-white w-[182px] border-purple border-solid border-t-[5px] border-x-0 border-b-0 pl-2.5 absolute top-[130px] right-[-20px]'>
              <h1 className='text-blue' style={{ color: "#2859b6" }}>Technology Centers</h1>
            </div>

          </div>

        </div>

      </div>

      <div className='m-[100px] mt-[18%]'>

        <Carousel>

          <div className='bg-blue h-[500px] w-[90vw] p-[30px]'>

            <div className='flex flex-col gap-14 text-white'>

              <p>Testimonials</p>
              <h1 className='lineUp'>“I'm a testimonial. Click to edit me and add<br></br> text that says something nice about you<br></br> and your services.”</h1>
              <p>Bert Brian, Student</p>

            </div>

          </div>

          <div className='bg-blue h-[500px] w-[90vw] p-[30px]'>

            <div className='flex flex-col gap-14 text-white'>

              <p>Testimonials</p>
              <h1 className='lineUp'>“I'm a testimonial. Click to edit me and add<br></br> text that says something nice about you<br></br> and your services.”</h1>
              <p>Nora Jacobs, Teacher</p>

            </div>

          </div>

          <div className='bg-blue h-[500px] w-[90vw] p-[30px]'>

            <div className='flex flex-col gap-14 text-white'>

              <p>Testimonials</p>
              <h1 className='lineUp'>“I'm a testimonial. Click to edit me and add<br></br> text that says something nice about you<br></br> and your services.”</h1>
              <p>Lakshmi Samson, Parent</p>

            </div>

          </div>

        </Carousel>

      </div>

      <div className='flex flex-col items-center mt-[35px]'>

        <p className='text-[50px] font-[fantasy] text-blue tracking-wider'>Our Partners</p>

        <div className='flex justify-center gap-[180px] mt-[5%]'>

          <img className='flipY' src="https://static.wixstatic.com/media/0b340f_58257d1c5acf4fb6ba514ddd026eacb7~mv2.png/v1/fill/w_167,h_165,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-02.png" alt='' />
          <img className='flipY' src="https://static.wixstatic.com/media/0b340f_d3d1eb2b11bd40f58f81ed7c190fcb53~mv2.png/v1/fill/w_196,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-04.png" alt='' />
          <img className='flipY' src="https://static.wixstatic.com/media/0b340f_5fc241f0651e4163a92c2ef30d7236d6~mv2.png/v1/fill/w_196,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-03.png" alt='' />
          <img className='flipY' src="https://static.wixstatic.com/media/0b340f_1311059c3e784ea98fe08be3eb83c78a~mv2.png/v1/fill/w_198,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-05.png" alt='' />
          <img className='flipY' src="https://static.wixstatic.com/media/0b340f_4a734ef8ef6a4589a990600542afd195~mv2.png/v1/fill/w_196,h_189,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo-06.png" alt='' />

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



  );
}

export default App;

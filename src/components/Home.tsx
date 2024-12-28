import Image from 'next/image'
const Landing = () => {
  return (
    <div>

        <div className='parent1'>

        <div className='content'>
            <h1>
               <span>Hello Wellcome</span>  <br /> My E-commerce Website
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, illo repudiandae quasi accusamus recusandae quia inventore maiores expedita magnam asperiores, <br />dignissimos atque ducimus! Neque tempore quae nihil voluptatem animi tempora sapiente doloribus,<br /> aliquam, ad reprehenderit eos vitae commodi eaque! Suscipit magni hic unde officiis impedit alias debitis voluptas neque. <br /> Eaque molestiae, <br /> dolorum nihil quam eos asperiores odio ipsa deserunt numquam accusantium quaerat architecto quod sed. Culpa nihil,<br /> id perspiciatis eum obcaecati, exercitationem veritatis illum sed nostrum odit laborum modi quos.
                </p>

                <div className='img'>
          <Image src="/Images/usama2.jpg"alt='pic'width={1700}height={700}/>
        </div>

            </h1>
        </div>



        </div>
      
    </div>
  )
}

export default Landing

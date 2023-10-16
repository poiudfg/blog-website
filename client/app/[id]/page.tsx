import axios from "axios";
import React from "react";

const page = async ({ params }: any) => {
  let id = params.id;
  console.log(id);
  let data = await axios.get(
    `http://localhost:1337/api/blogs/${id}?populate=*`
  );
  let response = data.data.data;
  let description = response.attributes.description;
  let author = response.attributes.author;
  let date = response.attributes.date;

  return (
    <div className="container mx-auto xl:max-w-[1100px] pt-[15px]">
        <div className="h-[150px]"></div>
      <div className="h-[250px] w-full">
        <img
          src={`http://localhost:1337${response.attributes.image.data.attributes.url}`}
          alt=""
          className="w-full h-[100%] object-cover"
        />
      </div>
      <div
        className="text-white pt-[20px] pb-[40px]"
        dangerouslySetInnerHTML={{ __html: `${description}` }}
      ></div>
       <div className="xl:max-w-[1180px] container mx-auto border-t-[0.3px] border-[gray] flex items-center justify-between overflow-hidden py-[3px] text-white mb-[15px]">
       <div className="flex items-center gap-[10px] mb-[15px]">
                <div >
                <div className="h-[20px]"></div>

                <img
                    src={`http://localhost:1337${response.attributes.avatar.data.attributes.url}`}
                    alt=""
                    className="h-[50px] w-[50px] rounded-full"
                />

                </div>
                
                <div 
        className="text-white pt-[20px] pb-[40px] h-[35px] left-[20px]"
        dangerouslySetInnerHTML={{ __html: `${author}` }}
      ></div>
      <div
        className="text-white pt-[20px] pb-[40px] h-[35px]"
        dangerouslySetInnerHTML={{ __html: `${date}` }}
      ></div>
                </div>
                <div>
        </div>
    </div>
    </div>
  );
};

export default page;
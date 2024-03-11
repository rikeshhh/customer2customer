import React from "react";
import story from "../../assets/story.jpg";
const About = () => {
  return (
    <section className="About flex flex-col gap-12">
      <div className="flex justify-center items-center">
        <div>
          <h2 className="text-3xl">Our Mission</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            reprehenderit aspernatur doloribus, consequuntur repellat quia
            exercitationem tempora molestiae necessitatibus aliquid autem fuga
            amet, quaerat expedita dolore, suscipit reiciendis recusandae
            consectetur! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Modi dicta fugit laudantium iusto quibusdam dolores doloribus
            eos rerum eaque ipsum quisquam necessitatibus, neque recusandae at
            mollitia officia nulla, obcaecati adipisci!
          </p>
        </div>
        <figure>
          <div className="blob"></div>
        </figure>
      </div>
      <div className="flex flex-col gap-">
        <div className="flex justify-center items-center gap-12">
          <figure className="w-1/2">
            <img src={story} alt="" className="h-96 w-full" />
          </figure>
          <div className="w-1/2 flex flex-col justify-start items-start">
            <h2 className="text-center font-semibold text-4xl">Our Story</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            dicta aperiam reiciendis excepturi, tempora reprehenderit animi
            debitis necessitatibus porro at, magni, delectus fugiat quidem
            accusantium provident fugit. Error, assumenda illum?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Libero, in dolor,
            voluptates quae veniam explicabo corporis nobis itaque veritatis
            accusamus omnis totam aut ex consequuntur, vero sequi inventore
            nesciunt excepturi.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

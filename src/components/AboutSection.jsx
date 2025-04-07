export default function AboutSection() {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-3">About Us</h2>
        <img
          src="images/123.jpg" 
          alt="About"
          className="w-[350px] h-[400px] rounded-lg mb-4"
        />
        <div className="w-[350px]">
        <p className="text-sm text-gray-700 leading-relaxed">
          We are a team of dedicated professionals driven by creativity, innovation,
          and a passion for exceptional design. With years of expertise in mobile
          application and website design, we specialize in transforming ideas into
          captivating digital experiences that seamlessly combine functionality and aesthetics...
        </p>
         </div>
      </div>
    );
  }
  
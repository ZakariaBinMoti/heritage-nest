import logo from "../../assets/Hertiage-Nest logo.webp";
import twitter from "../../assets/icons/twitter.png";
import linkedin from "../../assets/icons/linkedIn.png";
import facebook from "../../assets/icons/facebook.png";
import victory from "../../assets/icons/victory.png";

const Footer = () => {
  return (
    <div className="bg-[#ECF5FF] text-[#475467]">
      <div className="max-w-[1216px] mx-auto py-16">
        <div className="flex gap-16">
          <div>
            <img className="h-[80px]" src={logo} alt="" />
            <p className="font-medium pt-4">
              Design amazing digital experiences <br /> that create more happy
              in the world.
            </p>
          </div>
          <div className="grid grid-cols-5 grow">
            <ul className="font-semibold space-y-3">
              <li className="text-sm text-[#667085]">Product</li>
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
            <ul className="font-semibold space-y-3">
              <li className="text-sm text-[#667085]">Company</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
            <ul className="font-semibold space-y-3">
              <li className="text-sm text-[#667085]">Resources</li>
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
            <ul className="font-semibold space-y-3">
              <li className="text-sm text-[#667085]">Social</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>GitHub</li>
              <li>Dribbble</li>
            </ul>
            <ul className="font-semibold space-y-3">
              <li className="text-sm text-[#667085]">Legal</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
              <li>Settings</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between border-t border-[#C5E2FF] pt-8 mt-16">
            <p>© 2024 Heritage- Nest . All rights reserved.</p>
            <div className="flex gap-6">
                <img src={twitter} alt="" />
                <img src={linkedin} alt="" />
                <img src={facebook} alt="" />
                <img src={victory} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

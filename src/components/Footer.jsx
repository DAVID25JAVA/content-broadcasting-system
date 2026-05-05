import React from "react";
import Wrapper from "./Wrapper";
import { footerData } from "../../public/assets";
import { Globe, Mail, Phone, MapPin, GitBranchPlus } from "lucide-react";

function Footer() {
  const iconMap = {
    address: <MapPin size={16} />,
    phone: <Phone size={16} />,
    email: <Mail size={16} />
  };

  return (
    <footer className="bg-sky-50   mt-10">
      <Wrapper>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 py-8">
          
          {/* Logo + Description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.png" className="w-12" alt="logo" />
              <p className="text-lg font-semibold">EduBroadcast</p>
            </div>

            <p className="mt-4 text-sm text-gray-600 leading-6">
              A platform for seamless educational content broadcasting with
              structured approval workflows for teachers and principals.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Contact Info</h2>

            <div className="space-y-2">
              {footerData?.map((item) => (
                <div key={item.id} className="flex items-center gap-2 text-sm text-gray-700">
                   <span className="text-sky-400">{iconMap[item.type]}</span>
                  {item.link ? (
                    <a href={item.link} className="hover:text-blue-600">
                      {item.value}
                    </a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Follow Us</h2>

            <div className="flex gap-4">
              <a
                href="https://github.com/DAVID25JAVA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
              >
                <GitBranchPlus size={18} className="text-sky-500" />
              </a>

              <a
                href="https://david-portfolio-o7yw.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
              >
                <Globe size={18} className="text-sky-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EduBroadcast. All rights reserved.
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
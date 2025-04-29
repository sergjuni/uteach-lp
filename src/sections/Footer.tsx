import worldIcon from '../assets/icons/world_icon.png'
import euroIcon from '../assets/icons/euro_icon.png'
import accessibilityIcon from '../assets/icons/accessibility_icon.png'
import logoFooter from '../assets/images/logo_footer.png'

const Footer = () => {
  return (
    <footer className="bg-[#14183E] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-1">
            <img src={logoFooter} alt="uteach" className="h-8" />
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">Overview</a></li>
              <li><a href="#" className="hover:text-gray-300">Browse</a></li>
              <li>
                <a href="#" className="hover:text-gray-300 inline-flex items-center">
                  Accessibility
                  <span className="ml-2 px-2 py-0.5 text-xs bg-purple-500 text-white rounded">BETA</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Brainstorming</a></li>
              <li><a href="#" className="hover:text-gray-300">Ideation</a></li>
              <li><a href="#" className="hover:text-gray-300">Wireframing</a></li>
              <li><a href="#" className="hover:text-gray-300">Research</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300">Tutorials</a></li>
              <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Developers</a></li>
              <li><a href="#" className="hover:text-gray-300">Documentation</a></li>
              <li><a href="#" className="hover:text-gray-300">Integrations</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Press</a></li>
              <li><a href="#" className="hover:text-gray-300">Events</a></li>
              <li>
                <a href="#" className="hover:text-gray-300 inline-flex items-center">
                  Request Demo
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-sm text-gray-400">
              uteach © 2023. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                <img src={worldIcon} alt="" className="w-5 h-5" />
                EN
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                <img src={euroIcon} alt="" className="w-5 h-5" />
                EUR
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white">
                <img src={accessibilityIcon} alt="" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
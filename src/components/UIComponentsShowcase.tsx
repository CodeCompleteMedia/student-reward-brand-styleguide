import {
  Box, ChevronDown, ChevronLeft, ChevronRight, Check, X,
  Search, Calendar, Clock, User, Mail, Lock, Eye, EyeOff,
  AlertCircle, CheckCircle, Info, XCircle, Bell, Heart,
  Star, Settings, Menu, MoreVertical, Plus, Minus, Home,
  Upload, Download, Trash2, Edit, Share2, Filter, RefreshCw
} from 'lucide-react';
import { useState } from 'react';

export function UIComponentsShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [checkboxState, setCheckboxState] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('option1');

  return (
    <section className="py-32 bg-gradient-to-b from-white to-graphite-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <Box className="w-8 h-8 text-strong-cyan-500" />
          <h2 className="text-5xl font-bold text-charcoal-900">UI Components Library</h2>
        </div>

        <p className="text-xl text-charcoal-600 mb-16 max-w-4xl leading-relaxed">
          A comprehensive collection of production-ready UI components designed to work seamlessly with the brand style guide.
          Each component follows our design principles and integrates the signature color palette, typography, and gradient system.
        </p>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Buttons & Actions</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-8">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Primary Buttons</h4>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-signature-gradient text-white font-semibold rounded-lg hover-lift transition-all">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 bg-strong-cyan-500 text-white font-semibold rounded-lg hover:bg-strong-cyan-600 transition-colors">
                    Cyan Button
                  </button>
                  <button className="px-8 py-4 bg-signature-gradient text-white font-bold rounded-full hover-lift">
                    Rounded Primary
                  </button>
                  <button className="px-6 py-3 bg-signature-gradient text-white font-semibold rounded-lg flex items-center gap-2 hover-lift">
                    <Plus className="w-4 h-4" />
                    With Icon
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Secondary & Outline Buttons</h4>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-graphite-100 text-charcoal-800 font-semibold rounded-lg hover:bg-graphite-200 transition-colors">
                    Secondary
                  </button>
                  <button className="px-6 py-3 border-2 border-strong-cyan-500 text-strong-cyan-600 font-semibold rounded-lg hover:bg-strong-cyan-50 transition-colors">
                    Outline
                  </button>
                  <button className="px-6 py-3 text-charcoal-700 font-semibold rounded-lg hover:bg-graphite-100 transition-colors">
                    Ghost
                  </button>
                  <button className="px-6 py-3 text-strong-cyan-600 font-semibold rounded-lg hover:bg-strong-cyan-50 transition-colors underline">
                    Link Button
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Button Sizes & States</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="px-3 py-1.5 bg-signature-gradient text-white text-sm font-semibold rounded hover-lift">
                    Small
                  </button>
                  <button className="px-6 py-3 bg-signature-gradient text-white font-semibold rounded-lg hover-lift">
                    Medium
                  </button>
                  <button className="px-8 py-4 bg-signature-gradient text-white text-lg font-bold rounded-lg hover-lift">
                    Large
                  </button>
                  <button className="px-6 py-3 bg-graphite-200 text-graphite-400 font-semibold rounded-lg cursor-not-allowed" disabled>
                    Disabled
                  </button>
                  <button className="px-6 py-3 bg-signature-gradient text-white font-semibold rounded-lg flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Loading
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Icon Buttons</h4>
                <div className="flex flex-wrap gap-4">
                  <button className="w-10 h-10 bg-signature-gradient text-white rounded-lg hover-lift flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-strong-cyan-500 text-white rounded-lg hover:bg-strong-cyan-600 transition-colors flex items-center justify-center">
                    <Star className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 border-2 border-graphite-300 text-charcoal-700 rounded-lg hover:bg-graphite-100 transition-colors flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 bg-signature-gradient text-white rounded-full hover-lift flex items-center justify-center shadow-lg">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Button Groups</h4>
                <div className="inline-flex rounded-lg border border-graphite-300 overflow-hidden">
                  <button className="px-6 py-3 bg-signature-gradient text-white font-semibold border-r border-white/20">
                    Left
                  </button>
                  <button className="px-6 py-3 bg-white text-charcoal-700 font-semibold hover:bg-graphite-50 border-r border-graphite-300">
                    Center
                  </button>
                  <button className="px-6 py-3 bg-white text-charcoal-700 font-semibold hover:bg-graphite-50">
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Form Inputs</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Text Input</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-graphite-300 rounded-lg focus:border-strong-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Email Input</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite-400" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full pl-11 pr-4 py-3 border-2 border-graphite-300 rounded-lg focus:border-strong-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Password Input</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite-400" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-11 pr-12 py-3 border-2 border-graphite-300 rounded-lg focus:border-strong-cyan-500 focus:outline-none transition-colors"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-graphite-400 hover:text-charcoal-700">
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Search Input</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-graphite-400" />
                    <input
                      type="search"
                      placeholder="Search..."
                      className="w-full pl-11 pr-4 py-3 border-2 border-graphite-300 rounded-full focus:border-strong-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Textarea</label>
                  <textarea
                    placeholder="Enter your message..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-graphite-300 rounded-lg focus:border-strong-cyan-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                  <p className="text-sm text-graphite-500 mt-1">0 / 500 characters</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Select Dropdown</label>
                  <select className="w-full px-4 py-3 border-2 border-graphite-300 rounded-lg focus:border-strong-cyan-500 focus:outline-none transition-colors bg-white">
                    <option>Choose an option</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal-800 mb-2">Input with Error</label>
                  <input
                    type="text"
                    placeholder="Invalid input"
                    className="w-full px-4 py-3 border-2 border-red-400 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                  />
                  <p className="text-sm text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    This field is required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Checkboxes, Radio Buttons & Toggles</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Checkboxes</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-strong-cyan-500 border-2 border-graphite-300 rounded focus:ring-2 focus:ring-strong-cyan-300 cursor-pointer"
                        checked={checkboxState}
                        onChange={(e) => setCheckboxState(e.target.checked)}
                      />
                      <span className="text-charcoal-700 group-hover:text-charcoal-900">Accept terms and conditions</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-strong-cyan-500 border-2 border-graphite-300 rounded focus:ring-2 focus:ring-strong-cyan-300 cursor-pointer"
                      />
                      <span className="text-charcoal-700 group-hover:text-charcoal-900">Subscribe to newsletter</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-strong-cyan-500 border-2 border-graphite-300 rounded focus:ring-2 focus:ring-strong-cyan-300 cursor-pointer"
                        checked
                      />
                      <span className="text-charcoal-700 group-hover:text-charcoal-900">Enable notifications</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Radio Buttons</h4>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="option"
                        value="option1"
                        className="w-5 h-5 text-strong-cyan-500 border-2 border-graphite-300 focus:ring-2 focus:ring-strong-cyan-300 cursor-pointer"
                        checked={selectedRadio === 'option1'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <span className="text-charcoal-700 group-hover:text-charcoal-900">Option 1</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="option"
                        value="option2"
                        className="w-5 h-5 text-strong-cyan-500 border-2 border-graphite-300 focus:ring-2 focus:ring-strong-cyan-300 cursor-pointer"
                        checked={selectedRadio === 'option2'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <span className="text-charcoal-700 group-hover:text-charcoal-900">Option 2</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="option"
                        value="option3"
                        className="w-5 h-5 text-strong-cyan-500 border-2 border-graphite-300 focus:ring-2 focus:ring-strong-cyan-300 cursor-pointer"
                        checked={selectedRadio === 'option3'}
                        onChange={(e) => setSelectedRadio(e.target.value)}
                      />
                      <span className="text-charcoal-700 group-hover:text-charcoal-900">Option 3</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Toggle Switches</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-graphite-50 rounded-lg">
                      <span className="text-charcoal-700 font-medium">Enable feature</span>
                      <button
                        onClick={() => setSwitchState(!switchState)}
                        className={`relative w-14 h-7 rounded-full transition-colors ${
                          switchState ? 'bg-strong-cyan-500' : 'bg-graphite-300'
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                            switchState ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-graphite-50 rounded-lg">
                      <span className="text-charcoal-700 font-medium">Dark mode</span>
                      <button className="relative w-14 h-7 bg-graphite-300 rounded-full transition-colors">
                        <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-graphite-50 rounded-lg">
                      <span className="text-charcoal-700 font-medium">Notifications</span>
                      <button className="relative w-14 h-7 bg-strong-cyan-500 rounded-full transition-colors">
                        <span className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform translate-x-7" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Slider</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-charcoal-600">Volume</span>
                      <span className="text-sm font-bold text-charcoal-800">{sliderValue}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                      className="w-full h-2 bg-graphite-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-strong-cyan-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:bg-strong-cyan-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Cards & Content Containers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-graphite-200 hover-lift">
              <div className="h-48 bg-signature-gradient"></div>
              <div className="p-6">
                <h4 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Gradient Header Card</h4>
                <p className="text-charcoal-600 mb-4">
                  Perfect for featured content with strong visual emphasis and hierarchy.
                </p>
                <button className="text-strong-cyan-600 font-semibold hover:text-strong-cyan-700 flex items-center gap-1">
                  Learn more
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-graphite-200 hover-lift">
              <div className="w-12 h-12 bg-strong-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-strong-cyan-600" />
              </div>
              <h4 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Icon Feature Card</h4>
              <p className="text-charcoal-600 mb-4">
                Clean design with icon emphasis for showcasing features and benefits.
              </p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-signature-gradient text-white text-sm font-semibold rounded-lg hover-lift">
                  Action
                </button>
                <button className="px-4 py-2 border border-graphite-300 text-charcoal-700 text-sm font-semibold rounded-lg hover:bg-graphite-50">
                  Cancel
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-vanilla-cream-100 to-strong-cyan-100 rounded-2xl p-6 hover-lift">
              <h4 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Gradient Background</h4>
              <p className="text-charcoal-700 mb-4">
                Subtle gradient backgrounds create depth while maintaining excellent readability.
              </p>
              <div className="flex items-center gap-3 text-sm text-charcoal-600">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  John Doe
                </span>
              </div>
            </div>

            <div className="gradient-border hover-lift">
              <div className="p-6">
                <h4 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Gradient Border Card</h4>
                <p className="text-charcoal-600">
                  Elegant gradient border creates visual interest without overwhelming content.
                </p>
              </div>
            </div>

            <div className="bg-charcoal-900 rounded-2xl p-6 hover-lift">
              <div className="w-12 h-12 bg-strong-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-headline font-bold text-white mb-2">Dark Theme Card</h4>
              <p className="text-white/80 mb-4">
                Dark cards create dramatic contrast and modern aesthetic appeal.
              </p>
              <button className="text-strong-cyan-400 font-semibold hover:text-strong-cyan-300">
                Explore →
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-graphite-200 hover:border-strong-cyan-400 transition-colors cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-vanilla-cream-200 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-vanilla-cream-700" />
                </div>
                <span className="px-3 py-1 bg-strong-cyan-100 text-strong-cyan-700 text-xs font-bold rounded-full">
                  New
                </span>
              </div>
              <h4 className="text-xl font-headline font-bold text-charcoal-900 mb-2">Interactive Card</h4>
              <p className="text-charcoal-600">
                Hover state changes create engaging user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Badges & Labels</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Status Badges</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-strong-cyan-100 text-strong-cyan-700 text-sm font-bold rounded-full">
                    Active
                  </span>
                  <span className="px-3 py-1 bg-vanilla-cream-200 text-vanilla-cream-800 text-sm font-bold rounded-full">
                    Pending
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-bold rounded-full">
                    Success
                  </span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-bold rounded-full">
                    Error
                  </span>
                  <span className="px-3 py-1 bg-graphite-200 text-graphite-700 text-sm font-bold rounded-full">
                    Inactive
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Badge Variations</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-signature-gradient text-white text-sm font-bold rounded">
                    Gradient
                  </span>
                  <span className="px-3 py-1 border-2 border-strong-cyan-500 text-strong-cyan-600 text-sm font-bold rounded">
                    Outline
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-strong-cyan-500 text-white text-sm font-bold rounded-full">
                    <CheckCircle className="w-3 h-3" />
                    With Icon
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-graphite-100 text-charcoal-700 text-sm font-bold rounded-full">
                    Dismissible
                    <button className="hover:bg-graphite-200 rounded-full p-0.5">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                  <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full">
                    99+
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Category Tags</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-vanilla-cream-100 text-vanilla-cream-800 text-sm font-semibold rounded-lg hover:bg-vanilla-cream-200 cursor-pointer transition-colors">
                    Design
                  </span>
                  <span className="px-4 py-2 bg-strong-cyan-100 text-strong-cyan-800 text-sm font-semibold rounded-lg hover:bg-strong-cyan-200 cursor-pointer transition-colors">
                    Development
                  </span>
                  <span className="px-4 py-2 bg-jet-black-100 text-jet-black-800 text-sm font-semibold rounded-lg hover:bg-jet-black-200 cursor-pointer transition-colors">
                    Marketing
                  </span>
                  <span className="px-4 py-2 bg-graphite-100 text-graphite-800 text-sm font-semibold rounded-lg hover:bg-graphite-200 cursor-pointer transition-colors">
                    Business
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Alerts & Notifications</h3>
          <div className="space-y-4 max-w-4xl">
            <div className="p-5 bg-strong-cyan-50 border-l-4 border-strong-cyan-500 rounded-lg flex items-start gap-4">
              <Info className="w-6 h-6 text-strong-cyan-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-bold text-strong-cyan-900 mb-1">Information</h4>
                <p className="text-strong-cyan-800">This is an informational message to provide helpful context or guidance to users.</p>
              </div>
              <button className="text-strong-cyan-600 hover:text-strong-cyan-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 bg-green-50 border-l-4 border-green-500 rounded-lg flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-bold text-green-900 mb-1">Success</h4>
                <p className="text-green-800">Your action was completed successfully! Everything is working as expected.</p>
              </div>
              <button className="text-green-600 hover:text-green-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-bold text-yellow-900 mb-1">Warning</h4>
                <p className="text-yellow-800">Please review this information carefully before proceeding with your action.</p>
              </div>
              <button className="text-yellow-600 hover:text-yellow-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 bg-red-50 border-l-4 border-red-500 rounded-lg flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-bold text-red-900 mb-1">Error</h4>
                <p className="text-red-800">Something went wrong. Please check your input and try again.</p>
              </div>
              <button className="text-red-600 hover:text-red-800">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 bg-gradient-to-r from-vanilla-cream-50 to-strong-cyan-50 border-2 border-strong-cyan-200 rounded-lg flex items-start gap-4">
              <div className="w-8 h-8 bg-signature-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <Bell className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-charcoal-900 mb-1">Featured Notification</h4>
                <p className="text-charcoal-700">This is a special announcement with our signature gradient styling for emphasis.</p>
              </div>
              <button className="text-charcoal-600 hover:text-charcoal-900">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Tabs & Navigation</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-8">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Underline Tabs</h4>
                <div className="border-b border-graphite-200">
                  <div className="flex gap-8">
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`pb-4 font-semibold transition-colors relative ${
                        activeTab === 'all' ? 'text-strong-cyan-600' : 'text-charcoal-600 hover:text-charcoal-900'
                      }`}
                    >
                      All Items
                      {activeTab === 'all' && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-strong-cyan-500"></span>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab('active')}
                      className={`pb-4 font-semibold transition-colors relative ${
                        activeTab === 'active' ? 'text-strong-cyan-600' : 'text-charcoal-600 hover:text-charcoal-900'
                      }`}
                    >
                      Active
                      {activeTab === 'active' && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-strong-cyan-500"></span>
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab('completed')}
                      className={`pb-4 font-semibold transition-colors relative ${
                        activeTab === 'completed' ? 'text-strong-cyan-600' : 'text-charcoal-600 hover:text-charcoal-900'
                      }`}
                    >
                      Completed
                      {activeTab === 'completed' && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-strong-cyan-500"></span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Pill Tabs</h4>
                <div className="inline-flex p-1 bg-graphite-100 rounded-lg gap-1">
                  <button className="px-6 py-2 bg-signature-gradient text-white font-semibold rounded-lg">
                    Overview
                  </button>
                  <button className="px-6 py-2 text-charcoal-700 font-semibold rounded-lg hover:bg-white transition-colors">
                    Analytics
                  </button>
                  <button className="px-6 py-2 text-charcoal-700 font-semibold rounded-lg hover:bg-white transition-colors">
                    Reports
                  </button>
                  <button className="px-6 py-2 text-charcoal-700 font-semibold rounded-lg hover:bg-white transition-colors">
                    Settings
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Breadcrumb Navigation</h4>
                <nav className="flex items-center gap-2 text-sm">
                  <a href="#" className="text-strong-cyan-600 hover:text-strong-cyan-700 font-medium">Home</a>
                  <ChevronRight className="w-4 h-4 text-graphite-400" />
                  <a href="#" className="text-strong-cyan-600 hover:text-strong-cyan-700 font-medium">Products</a>
                  <ChevronRight className="w-4 h-4 text-graphite-400" />
                  <a href="#" className="text-strong-cyan-600 hover:text-strong-cyan-700 font-medium">Category</a>
                  <ChevronRight className="w-4 h-4 text-graphite-400" />
                  <span className="text-charcoal-700 font-medium">Current Page</span>
                </nav>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Pagination</h4>
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 border-2 border-graphite-300 rounded-lg flex items-center justify-center hover:bg-graphite-50 transition-colors">
                    <ChevronLeft className="w-5 h-5 text-charcoal-700" />
                  </button>
                  <button className="w-10 h-10 bg-signature-gradient text-white font-semibold rounded-lg">
                    1
                  </button>
                  <button className="w-10 h-10 border-2 border-graphite-300 text-charcoal-700 font-semibold rounded-lg hover:bg-graphite-50 transition-colors">
                    2
                  </button>
                  <button className="w-10 h-10 border-2 border-graphite-300 text-charcoal-700 font-semibold rounded-lg hover:bg-graphite-50 transition-colors">
                    3
                  </button>
                  <span className="px-2 text-charcoal-600">...</span>
                  <button className="w-10 h-10 border-2 border-graphite-300 text-charcoal-700 font-semibold rounded-lg hover:bg-graphite-50 transition-colors">
                    10
                  </button>
                  <button className="w-10 h-10 border-2 border-graphite-300 rounded-lg flex items-center justify-center hover:bg-graphite-50 transition-colors">
                    <ChevronRight className="w-5 h-5 text-charcoal-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Avatars & User Elements</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-8">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Avatar Sizes</h4>
                <div className="flex items-end gap-4">
                  <div className="w-8 h-8 bg-signature-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">
                    JD
                  </div>
                  <div className="w-10 h-10 bg-strong-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    AS
                  </div>
                  <div className="w-12 h-12 bg-vanilla-cream-400 rounded-full flex items-center justify-center text-vanilla-cream-900 text-base font-bold">
                    MK
                  </div>
                  <div className="w-16 h-16 bg-charcoal-700 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    RJ
                  </div>
                  <div className="w-20 h-20 bg-signature-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    TW
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Avatar Variations</h4>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-signature-gradient rounded-full"></div>
                  <div className="w-12 h-12 bg-strong-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-vanilla-cream-400 rounded-full"></div>
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                  </div>
                  <div className="w-12 h-12 bg-graphite-300 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-graphite-600" />
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-charcoal-700 flex items-center justify-center text-white font-bold">
                    SQ
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Avatar Groups</h4>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-strong-cyan-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold -mr-2 z-30">
                    JD
                  </div>
                  <div className="w-10 h-10 bg-vanilla-cream-400 rounded-full border-2 border-white flex items-center justify-center text-vanilla-cream-900 text-sm font-bold -mr-2 z-20">
                    AS
                  </div>
                  <div className="w-10 h-10 bg-charcoal-700 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold -mr-2 z-10">
                    MK
                  </div>
                  <div className="w-10 h-10 bg-graphite-400 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-bold">
                    +5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Progress & Loading States</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-8">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Progress Bars</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal-700">Upload progress</span>
                      <span className="text-sm font-bold text-charcoal-900">75%</span>
                    </div>
                    <div className="h-2 bg-graphite-200 rounded-full overflow-hidden">
                      <div className="h-full bg-signature-gradient rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal-700">Processing</span>
                      <span className="text-sm font-bold text-charcoal-900">45%</span>
                    </div>
                    <div className="h-3 bg-graphite-200 rounded-full overflow-hidden">
                      <div className="h-full bg-strong-cyan-500 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-charcoal-700">Completion rate</span>
                      <span className="text-sm font-bold text-charcoal-900">90%</span>
                    </div>
                    <div className="h-4 bg-graphite-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Loading Spinners</h4>
                <div className="flex items-center gap-8">
                  <div className="w-8 h-8 border-4 border-graphite-200 border-t-strong-cyan-500 rounded-full animate-spin"></div>
                  <div className="w-10 h-10 border-4 border-graphite-200 border-t-strong-cyan-500 rounded-full animate-spin"></div>
                  <div className="w-12 h-12 border-4 border-transparent border-t-strong-cyan-500 border-r-strong-cyan-500 rounded-full animate-spin"></div>
                  <RefreshCw className="w-8 h-8 text-strong-cyan-500 animate-spin" />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Skeleton Loaders</h4>
                <div className="space-y-4">
                  <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-graphite-200 rounded w-3/4"></div>
                    <div className="h-4 bg-graphite-200 rounded w-1/2"></div>
                    <div className="h-4 bg-graphite-200 rounded w-5/6"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-graphite-200 rounded-lg animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-graphite-200 rounded animate-pulse"></div>
                      <div className="h-3 bg-graphite-200 rounded w-2/3 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Modals & Overlays</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Dialog Preview</h4>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="px-6 py-3 bg-signature-gradient text-white font-semibold rounded-lg hover-lift"
                >
                  Open Dialog
                </button>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Drawer/Sheet Preview</h4>
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="px-6 py-3 border-2 border-strong-cyan-500 text-strong-cyan-600 font-semibold rounded-lg hover:bg-strong-cyan-50 transition-colors"
                >
                  Open Drawer
                </button>
              </div>

              <div className="p-6 bg-gradient-to-br from-vanilla-cream-50 to-strong-cyan-50 rounded-lg border border-strong-cyan-200">
                <p className="text-charcoal-700 mb-2">
                  <strong>Interactive Example:</strong> Click the buttons above to see modal and drawer overlays in action.
                </p>
                <p className="text-sm text-charcoal-600">
                  These components demonstrate proper focus management, backdrop overlays, and smooth animations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Dropdowns & Menus</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Dropdown Menu</h4>
                <div className="inline-block">
                  <div className="bg-white border border-graphite-300 rounded-lg shadow-lg p-2 w-56">
                    <button className="w-full px-4 py-2 text-left text-charcoal-700 hover:bg-graphite-100 rounded flex items-center gap-3">
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button className="w-full px-4 py-2 text-left text-charcoal-700 hover:bg-graphite-100 rounded flex items-center gap-3">
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                    <div className="h-px bg-graphite-200 my-2"></div>
                    <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded flex items-center gap-3">
                      <X className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-charcoal-800 mb-4">Context Menu Style</h4>
                <div className="inline-block">
                  <div className="bg-white border border-graphite-300 rounded-lg shadow-xl p-2 w-48">
                    <button className="w-full px-3 py-2 text-sm text-left text-charcoal-700 hover:bg-graphite-100 rounded flex items-center justify-between">
                      Copy
                      <span className="text-xs text-graphite-500">⌘C</span>
                    </button>
                    <button className="w-full px-3 py-2 text-sm text-left text-charcoal-700 hover:bg-graphite-100 rounded flex items-center justify-between">
                      Paste
                      <span className="text-xs text-graphite-500">⌘V</span>
                    </button>
                    <button className="w-full px-3 py-2 text-sm text-left text-charcoal-700 hover:bg-graphite-100 rounded flex items-center justify-between">
                      Delete
                      <span className="text-xs text-graphite-500">⌫</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Tables & Data Display</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-graphite-100 border-b border-graphite-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-charcoal-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-charcoal-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-charcoal-900">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-charcoal-900">Email</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-charcoal-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-graphite-200">
                  <tr className="hover:bg-graphite-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-signature-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">
                          JD
                        </div>
                        <span className="font-semibold text-charcoal-900">John Doe</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-charcoal-700">Admin</td>
                    <td className="px-6 py-4 text-charcoal-600">john@example.com</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-strong-cyan-600 hover:text-strong-cyan-700 mr-3">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-graphite-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-strong-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          AS
                        </div>
                        <span className="font-semibold text-charcoal-900">Alice Smith</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-charcoal-700">Editor</td>
                    <td className="px-6 py-4 text-charcoal-600">alice@example.com</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-strong-cyan-600 hover:text-strong-cyan-700 mr-3">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-graphite-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-vanilla-cream-400 rounded-full flex items-center justify-center text-vanilla-cream-900 text-sm font-bold">
                          MK
                        </div>
                        <span className="font-semibold text-charcoal-900">Mike Kim</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-charcoal-700">Viewer</td>
                    <td className="px-6 py-4 text-charcoal-600">mike@example.com</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-strong-cyan-600 hover:text-strong-cyan-700 mr-3">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-headline font-bold text-charcoal-900 mb-8">Empty States</h3>
          <div className="bg-white rounded-2xl border border-graphite-200 p-16 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-vanilla-cream-100 to-strong-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Box className="w-10 h-10 text-strong-cyan-600" />
              </div>
              <h4 className="text-2xl font-headline font-bold text-charcoal-900 mb-3">No items found</h4>
              <p className="text-charcoal-600 mb-6">
                Get started by creating your first item. It only takes a few seconds.
              </p>
              <button className="px-8 py-4 bg-signature-gradient text-white font-bold rounded-lg hover-lift inline-flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Create New Item
              </button>
            </div>
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6" onClick={() => setIsDialogOpen(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-headline font-bold text-charcoal-900 mb-2">Dialog Title</h3>
                <p className="text-charcoal-600">This is a modal dialog component with overlay backdrop.</p>
              </div>
              <button onClick={() => setIsDialogOpen(false)} className="text-graphite-500 hover:text-charcoal-900">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mb-6">
              <p className="text-charcoal-700 leading-relaxed">
                Modal dialogs are perfect for focused interactions that require user attention.
                They temporarily block interaction with the main page until dismissed.
              </p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setIsDialogOpen(false)} className="flex-1 px-6 py-3 bg-signature-gradient text-white font-semibold rounded-lg hover-lift">
                Confirm
              </button>
              <button onClick={() => setIsDialogOpen(false)} className="flex-1 px-6 py-3 border-2 border-graphite-300 text-charcoal-700 font-semibold rounded-lg hover:bg-graphite-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsDrawerOpen(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-headline font-bold text-charcoal-900 mb-2">Drawer Panel</h3>
                <p className="text-charcoal-600">Side drawer for additional content and actions.</p>
              </div>
              <button onClick={() => setIsDrawerOpen(false)} className="text-graphite-500 hover:text-charcoal-900">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-charcoal-700 leading-relaxed">
                Drawers slide in from the side and are ideal for navigation menus,
                filters, or supplementary content that doesn't need full page focus.
              </p>
              <div className="p-4 bg-gradient-to-br from-vanilla-cream-50 to-strong-cyan-50 rounded-lg border border-strong-cyan-200">
                <p className="text-sm text-charcoal-700">
                  This drawer can contain any content including forms, lists, or settings.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <button onClick={() => setIsDrawerOpen(false)} className="w-full px-6 py-3 bg-signature-gradient text-white font-semibold rounded-lg hover-lift">
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

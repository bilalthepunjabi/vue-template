<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <div class="relative overflow-hidden">
      <Popover as="header" class="relative">
        <div class="dark:bg-gray-900 bg-white pt-6">
          <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">VueTailwindUI</span>
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="dark:bg-gray-900 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span class="sr-only">Open main menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="hidden space-x-8 md:flex md:ml-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-base font-medium text-white hover:text-gray-300">{{ item.name }}</a>
              </div>
            </div>
          </nav>
        </div>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="pt-5 pb-6">
                <div class="px-2 space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <div class="mt-6 px-5">
                  <a href="#" class="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700">Start free trial</a>
                </div>
                <div class="mt-6 px-5">
                  <p class="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a></p>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main>
        <div class="pt-10 dark:bg-gray-900 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div class="mx-auto max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div class="lg:py-24">
                  <a href="#" class="inline-flex items-center text-white bg-black rounded-full p-1 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span :class="'px-4 ' + (theme === 'sun' ? 'text-white text-xs font-semibold leading-5 uppercase tracking-wide rounded-full bg-yellow-600' : '')"><SunIcon class="w-5" @click="sun()"/></span>
                    <span :class="''+ (theme === 'moon' ? ' text-black text-xs font-semibold leading-5 uppercase tracking-wide rounded-full bg-white' : '')"><MoonIcon class="w-5" @click="moon()"/></span>
                  </a>
                  <h1 class="mt-4 text-4xl tracking-tight font-extrabold dark:text-white text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span class="block">A better way to</span>
                    <span class="block text-indigo-600">develop web apps</span>
                    <span class="block">fast & efficient</span>
                  </h1>
                  <p class="mt-3 text-base dark:text-gray-300 text-gray-800 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    This branch [tailwind] of <a href="https://github.com/bilalthepunjabi/vue-template">https://github.com/bilalthepunjabi/vue-template.git</a> includes built-in { @tailwindcss / @headless-ui }.
                  </p>
                </div>
              </div>
              <div class="mt-12 lg:relative">
                <div class="mx-auto">
                  <CubeTransparentIcon class="ml-2 text-indigo-600 dark:text-white" aria-hidden="true"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- More main page content here... -->
      </main>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon,CubeTransparentIcon,SunIcon,MoonIcon } from '@heroicons/vue/outline'

const navigation = []

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    CubeTransparentIcon,
    SunIcon,
    MoonIcon
  },
  data(){
    return {
      theme : 'sun'
    }
  },
  methods: {
    sun(){
      this.theme = 'sun'
      document.getElementById('app').classList.remove('dark');
    },
    moon(){
      this.theme = 'moon'
      document.getElementById('app').classList.add('dark');
    }
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>
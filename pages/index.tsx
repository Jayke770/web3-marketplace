/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import { Header, Navbar } from '../components/Client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from "swiper"
import { faker } from '@faker-js/faker'
import { FaWallet, FaImage, FaTag } from 'react-icons/fa'
import { HiCollection } from 'react-icons/hi'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
const cards = Array.from({ length: 10 })
const cards2 = Array.from({ length: 16 })
export default function Home() {
  return (
    <>
      <Head>
        <title>TEAMDAO Marketplace Control Panel</title>
      </Head>
      <Navbar />
      <Header />
      <div className="p-5">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
            1280: {
              slidesPerView: 5
            },
          }}
          coverflowEffect={{
            rotate: 30
          }}
          modules={[EffectCoverflow]}
          className="mySwiper">
          {cards.map((_, i) => (
            <SwiperSlide key={i}>
              <div className="card card-compact bg-neutral">
                <figure>
                  <img
                    src={faker.image.abstract()}
                    alt="Shoes"
                    className="w-full h-80 object-cover" />
                </figure>
                <div className="card-body flex-row">
                  <img
                    src={faker.image.avatar()}
                    alt="Shoes"
                    className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col justify-center">
                    <span className="text-white">{faker.name.fullName()}</span>
                    <span>{faker.name.jobDescriptor()}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-3 py-10 px-10 md:px-20 lg:px-24 xl:px-32 mt-10 bg-base-300 w-full">
        <div className="text-3xl flex justify-center items-center py-6 md:py-10 font-bold">Top Collections</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards2.map((_, i) => (
            <div key={i} className="card bg-neutral">
              <div className="p-4 flex gap-3">
                <img
                  src={faker.image.avatar()}
                  alt="Shoes"
                  className="w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <span>{faker.name.fullName()}</span>
                  <span className="text-xs">{faker.finance.amount()} KLAY</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 py-5 px-10 md:px-20 lg:px-24 xl:px-32 mt-10 w-full">
        <div className="text-3xl flex justify-center items-center py-6 md:py-10 font-bold">Create And Sell Your NFTs</div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="flex flex-col gap-4 items-center">
            <div className="rounded-full bg-purple-300 p-2.5">
              <div className="p-3 rounded-full bg-purple-900 ">
                <FaWallet className="text-xl text-white" />
              </div>
            </div>
            <div className="text-xl font-bold">
              Setup  Your Wallet
            </div>
            <div className="text-center text-sm font-normal">
              {"Once You've Set Up Your Wallet Of Choice, Connect It To OpenSeaby Clicking The NFT Marketplacein The Topright Corner."}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="rounded-full bg-teal-300 p-2.5">
              <div className="p-3 rounded-full bg-teal-900">
                <HiCollection className="text-xl text-white" />
              </div>
            </div>
            <div className="text-xl font-bold">
              Create Your Collection
            </div>
            <div className="text-center text-sm font-normal">
              {"Click Create And Set Up Your Collection. Add Social Links, A Description, Profile & Banner Images, Andset A Secondary Sales Fee."}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="rounded-full bg-blue-300 p-2.5">
              <div className="p-3 rounded-full bg-blue-900 ">
                <FaImage className="text-xl text-white" />
              </div>
            </div>
            <div className="text-xl font-bold ffa">
              Add Your NFTs
            </div>
            <div className="text-center text-sm font-normal">
              {"Upload Your Work (Image, Video, Audio, Or 3D Art), Add A Title And Description, And Customize Your NFTswith Properties, Stats."}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="rounded-full bg-amber-300 p-2.5">
              <div className="p-3 rounded-full bg-amber-900 ">
                <FaTag className="text-xl text-white" />
              </div>
            </div>
            <div className="text-xl font-bold">
              List Them For Sale
            </div>
            <div className="text-center text-sm font-normal">
              {"Choose Between Auctions, Fixed-Price Listings, And Declining-Price Listings. You Choose How You Want Tosell Your NFTs!"}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
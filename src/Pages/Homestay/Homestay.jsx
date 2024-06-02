import { Grid, Typography } from "@mui/material";
import React from "react";
import FeaturedPost from "../../components/Post/FeaturedPost";
import HorizontalSkeleton from "../../components/Skeleton/HorizontalSkeleton";
import HotelPost from "../Hotel/HotelPost";
import HomestayPost from "./HomestayPost";

const post = [
  {
    id: "6636375bfd922161c89500ab",
    name: "Hotel Alaknanda",
    location:
      "274, 293, Kaulagarh Rd, Rajender Nagar, Dehradun, Uttarakhand 248003",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4425311881114!2d78.0178559793457!3d30.338370799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ff4740401f%3A0x39e76b0cbd98d314!2sHotel%20Alaknanda!5e0!3m2!1sen!2sin!4v1714828668299!5m2!1sen!2sin",
    city: "Dehradun",
    images: [
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
    ],
    cost: 1000,
  },
  {
    id: "66363825fd922161c89500ad",
    name: "Hotel Tapovan Cottage",
    location: "NH 34, Gangotri, Uttarakhand 249135",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3420.0934418399543!2d78.93164210475847!3d30.995771600000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390873fa5d634ddf%3A0x7edaedda48ae8d06!2sHotel%20Tapovan%20Cottage!5e0!3m2!1sen!2sin!4v1714829311302!5m2!1sen!2sin",
    city: "Gangotri",
    images: [
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
    ],
    cost: 2000,
  },
  {
    id: "663638d4fd922161c89500ae",
    name: "Adarsh hotel",
    location: "Narayan koty, rode, Kedarnath, Uttarakhand 246445",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.7101469799404!2d79.06521632623767!3d30.734693600000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39083f8c3dcbf863%3A0x887bf1f05496765c!2sAdarsh%20hotel!5e0!3m2!1sen!2sin!4v1714829433449!5m2!1sen!2sin",
    city: "Kedarnath",
    images: [
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
    ],
    cost: 2500,
  },
  {
    id: "66363967fd922161c89500af",
    name: "Hotel Park Royale Inn",
    location:
      "Jharipani Road Near St. George's College, Barlow Ganj, Mussoorie, Uttarakhand 248179",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55029.372581578464!2d78.0352399789668!3d30.454925855901358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d707ba343799%3A0xc61ebc611791d012!2sHotel%20Park%20Royale%20Inn!5e0!3m2!1sen!2sin!4v1714829608704!5m2!1sen!2sin",
    city: "Mussoorie",
    images: [
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
    ],
    cost: 3000,
  },
  {
    id: "663639e8fd922161c89500b0",
    name: "Hotel Shalimar",
    location: "The, Mall Rd, Mallital, Nainital, Uttarakhand 263002",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13953.98165252062!2d79.44831792704257!3d29.387087319389178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1f226cb6719%3A0x9c2a3888e05bfe64!2sHotel%20Shalimar!5e0!3m2!1sen!2sin!4v1714829741242!5m2!1sen!2sin",
    city: "Nainital",
    images: [
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
    ],
    cost: 3000,
  },
  {
    id: "66363cc7fd922161c89500b1",
    name: "Hotel Alpine",
    location:
      "Rudraprayag, NH-109, Kedarnath Road, Rudraprayag, Rudraprayag, Uttarakhand 246421",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5878563987303!2d78.97687968885498!3d30.305792599999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909b65bb70d1633%3A0x36a98a9e8ed41716!2sHotel%20Alpine!5e0!3m2!1sen!2sin!4v1714830487527!5m2!1sen!2sin",
    city: "Rudraprayag",
    images: [
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
    ],
    cost: 2500,
  },
  {
    id: "66363e17fd922161c89500b2",
    name: "West View",
    location:
      "JCFQ+3MC, Pandey Kota, Ranikhet, Ranikhet Range, Uttarakhand 263645",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13873.383020845267!2d79.42069743716831!3d29.622699576641146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a96d268d8345%3A0x8aac656ed99a2b12!2sWest%20View!5e0!3m2!1sen!2sin!4v1714830827295!5m2!1sen!2sin",
    city: "Ranikhet",
    images: [
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
    ],
    cost: 2000,
  },
  {
    id: "66363e6afd922161c89500b3",
    name: "Hotel Sagar, Kausani",
    location:
      "SN Pant Marg View Point, Kausani, Someshwar Range, Uttarakhand 263639",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13843.26595571179!2d79.5873710917389!3d29.84071835043562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a74e7e477a6fa9%3A0x593dde894fceb034!2sHotel%20Sagar%2C%20Kausani!5e0!3m2!1sen!2sin!4v1714830910574!5m2!1sen!2sin",
    city: "Kausani",
    images: [
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
    ],
    cost: 1500,
  },
  {
    id: "66363eecfd922161c89500b4",
    name: "Snow View Hotel",
    location: "PV2C+GRX, Banglow 35, Chakrata, Uttarakhand 248123",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13722.422996582072!2d77.8608671459246!3d30.701366900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f4a71d23d8199%3A0xc7533c5fdbe08704!2sSnow%20View%20Hotel!5e0!3m2!1sen!2sin!4v1714831044151!5m2!1sen!2sin",
    city: "Chakrata",
    images: [
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
    ],
    cost: 3000,
  },
  {
    id: "66364009fd922161c89500b5",
    name: "hotel mount view annexy",
    location: "Shankaracharya Math, Upper Bazar, Joshimath, Uttarakhand 246443",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54986.94796758322!2d79.50201838595225!3d30.529966370593275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a79cad67833b0b%3A0x21af99ae5639ac5e!2shotel%20mount%20view%20annexy!5e0!3m2!1sen!2sin!4v1714831298594!5m2!1sen!2sin",
    city: "Auli",
    images: [
      "https://r1imghtlak.ibcdn.com/5fe55b52046e11eea15e0a58a9feac02.jpg",
      "https://r1imghtlak.mmtcdn.com/363fe6e4dfeb11ec93010a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/52b5fd2a046d11ee934f0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/78b2b428046d11eea1540a58a9feac02.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/htl-imgs/202208171217535059-4f389f6c1df611eda38c0a58a9feac02.jpg",
      "https://r1imghtlak.ibcdn.com/d673cdf8db7911edb2dd0a58a9feac02.jpg",
    ],
    cost: 3500,
  },
];

export default function Homestay() {
  const loading = false;
  // const { data: post, isError, error, isPending: loading } = useFetch("/tour");
  //   if (isError) {
  //     return (
  //       <Typography marginTop={"2rem"} textAlign={"center"}>
  //         Error : {error.message}
  //       </Typography>
  //     );
  //   }

  return (
    <>
      <Typography
        sx={{ textAlign: "center", paddingY: "2rem" }}
        component={"h1"}
        variant="h4"
      >
        Explore All Homestay
      </Typography>
      {!loading && (
        <Grid container spacing={4}>
          {post.map((post) => (
            <HomestayPost key={post.id} post={post} />
          ))}
        </Grid>
      )}
      {loading && <HorizontalSkeleton />}
    </>
  );
}

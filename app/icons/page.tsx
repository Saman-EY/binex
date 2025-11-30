"use client"
import React, { Suspense, useEffect } from 'react'
import HamburgerIcon from '@/app/components/icons/HamburgerIcon'
import ArrowSquareDownDarkIcon from '@icons/ArrowSquareDownDarkIcon'
import ChartIcon from '@icons/ChartIcon'
import CloseIcon from '@icons/CloseIcon'
import BuyCryptoIcon from '@icons/BuyCryptoIcon'
import GpsIcon from '@icons/GpsIcon'
import BoxIcon from '@icons/BoxIcon'
import ElementPlusIcon from '@icons/ElementPlusIcon'
import HierarchyIcon from '@icons/HierarchyIcon'
import ChevronUpIcon from '@icons/ChevronUpIcon'
import SearchIcon from '@icons/SearchIcon'
import BitcoinCardIcon from '@icons/BitcoinCardIcon'
import ReceivedIcon from '@icons/ReceivedIcon'
import SpeedometerIcon from '@icons/SpeedometerIcon'
import LogoBinex from '@icons/LogoBinex'
import LogoWhiteBinex from '@icons/LogoWhiteBinex'
import CloseSquareIcon from '@icons/CloseSquareIcon'
import LocationIcon from '@icons/LocationIcon'
import SmsNotificationIcon from '@icons/SmsNotificationIcon'
import CallCallingIcon from '@icons/CallCallingIcon'
import MessageTextIcon from '@icons/MessageTextIcon'
import MessageIcon from '@icons/MessageIcon'
import ClockIcon from '@icons/ClockIcon'
import VideoTimeIcon from '@icons/VideoTimeIcon'
import UserIcon from '@icons/UserIcon'
import GhostIcon from '@icons/GhostIcon'
import BitcoinConvertIcon from '@icons/BitcoinConvertIcon'
import EmptyWalletIcon from '@icons/EmptyWalletIcon'
import PeopleIcon from '@icons/PeopleIcon'
import MessageQuestionIcon from '@icons/MessageQuestionIcon'
import ProfileIcon from '@icons/ProfileIcon'
import SecuritySafeIcon from '@icons/SecuritySafeIcon'
import SearchStatusIcon from '@icons/SearchStatusIcon'
import CandleIcon from '@icons/CandleIcon'
import CoinIcon from '@icons/CoinIcon'
import MoneyTimeIcon from '@icons/MoneyTimeIcon'
import DocumentDownloadIcon from '@icons/DocumentDownloadIcon'
import PlayCircleIcon from '@icons/PlayCircleIcon'
import PlayAddIcon from '@icons/PlayAddIcon'
import StopIcon from '@icons/StopIcon'
import SearchNormalIcon from '@icons/SearchNormalIcon'
import DirectBoxReceiveIcon from '@icons/DirectBoxReceiveIcon'
import WarningIcon from '@icons/WarningIcon'
import TickSquareIcon from '@icons/TickSquareIcon'
import YesIcon from '@icons/YesIcon'
import BitcoinRefreshIcon from '@icons/BitcoinRefreshIcon'
import CpuChargeIcon from '@icons/CpuChargeIcon'
import CalendarIcon from '@icons/CalendarIcon'
import BagTickIcon from '@icons/BagTickIcon'
import CardTickIcon from '@icons/CardTickIcon'
import SendTwoIcon from '@icons/SendTwoIcon'
import DocumentCopyIcon from '@icons/DocumentCopyIcon'
import RankingIcon from '@icons/RankingIcon'
import SaveAddIcon from '@icons/SaveAddIcon'
import AddSquareIcon from '@icons/AddSquareIcon'
import EditIcon from '@icons/EditIcon'
import SecurityIcon from '@icons/SecurityIcon'
import DocumentUploadIcon from '@icons/DocumentUploadIcon'
import InformationIcon from '@icons/InformationIcon'
import EyeIcon from '@icons/EyeIcon'
import EyeSlashIcon from '@icons/EyeSlashIcon'
import ClipboardTextIcon from '@icons/ClipboardTextIcon'
import ArrowLeftIcon from '@icons/ArrowLeftIcon'
import LocationTickIcon from '@icons/LocationTickIcon'
import UserEditIcon from '@icons//UserEditIcon'
import LockIcon from '../components/icons/LockIcon'
import LogoutIcon from '../components/icons/LogoutIcon'

type Props = {}
const icons = [
  HamburgerIcon,
  ArrowSquareDownDarkIcon,
  ChartIcon,
  CloseIcon,
  BuyCryptoIcon,
  GpsIcon,
  BoxIcon,
  ElementPlusIcon,
  HierarchyIcon,
  ChevronUpIcon,
  SearchIcon,
  BitcoinCardIcon,
  ReceivedIcon,
  SpeedometerIcon,
  LogoBinex,
  LogoWhiteBinex,
  CloseSquareIcon,
  LocationIcon,
  SmsNotificationIcon,
  CallCallingIcon,
  MessageTextIcon,
  MessageIcon,
  ClockIcon,
  VideoTimeIcon,
  UserIcon,
  GhostIcon,
  BitcoinConvertIcon,
  EmptyWalletIcon,
  PeopleIcon,
  MessageQuestionIcon,
  ProfileIcon,
  SecuritySafeIcon,
  SearchStatusIcon,
  CandleIcon,
  CoinIcon,
  MoneyTimeIcon,
  DocumentDownloadIcon,
  PlayCircleIcon,
  PlayAddIcon,
  StopIcon,
  SearchNormalIcon,
  DirectBoxReceiveIcon,
  WarningIcon,
  TickSquareIcon,
  YesIcon,
  BitcoinRefreshIcon,
  CpuChargeIcon,
  CalendarIcon,
  BagTickIcon,
  CardTickIcon,
  SendTwoIcon,
  DocumentCopyIcon,
  RankingIcon,
  SaveAddIcon,
  AddSquareIcon,
  EditIcon,
  SecurityIcon,
  DocumentUploadIcon,
  InformationIcon,
  EyeIcon,
  EyeSlashIcon,
  ClipboardTextIcon,
  ArrowLeftIcon,
  LocationTickIcon,
  UserEditIcon,
  LockIcon,
  LogoutIcon
]
const Page = (props: Props) => {

  return (
    <div className='flex flex-wrap'>
      {
        icons.map((Icon, idx) => {
          return <div key={idx} className='w-auto  flex items-center justify-center border border-1 grow p-4 flex-col gap-4'>
            <Icon />
            {Icon.name}
          </div>
        })
      }
      <Suspense></Suspense>
    </div>
  )
}

export default Page

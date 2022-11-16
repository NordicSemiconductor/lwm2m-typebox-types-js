import { Type } from "@sinclair/typebox";
import { objectURN as LwM2MServer_1URN, LwM2MServer_1 } from "./types/1";
import {
  objectURN as LwM2MAccessControl_2URN,
  LwM2MAccessControl_2,
} from "./types/2";
import { objectURN as Device_3URN, Device_3 } from "./types/3";
import {
  objectURN as ConnectivityMonitoring_4URN,
  ConnectivityMonitoring_4,
} from "./types/4";
import { objectURN as FirmwareUpdate_5URN, FirmwareUpdate_5 } from "./types/5";
import { objectURN as Location_6URN, Location_6 } from "./types/6";
import {
  objectURN as ConnectivityStatistics_7URN,
  ConnectivityStatistics_7,
} from "./types/7";
import { objectURN as LockandWipe_8URN, LockandWipe_8 } from "./types/8";
import {
  objectURN as LWM2MSoftwareManagement_9URN,
  LWM2MSoftwareManagement_9,
} from "./types/9";
import {
  objectURN as LWM2MCellularConnectivity_10URN,
  LWM2MCellularConnectivity_10,
} from "./types/10";
import {
  objectURN as LWM2MAPNConnectionProfile_11URN,
  LWM2MAPNConnectionProfile_11,
} from "./types/11";
import {
  objectURN as WLANconnectivity_12URN,
  WLANconnectivity_12,
} from "./types/12";
import {
  objectURN as LWM2MBearerSelection_13URN,
  LWM2MBearerSelection_13,
} from "./types/13";
import {
  objectURN as LWM2MSoftwareComponent_14URN,
  LWM2MSoftwareComponent_14,
} from "./types/14";
import { objectURN as DevCapMgmt_15URN, DevCapMgmt_15 } from "./types/15";
import { objectURN as Portfolio_16URN, Portfolio_16 } from "./types/16";
import {
  objectURN as BinaryAppDataContainer_19URN,
  BinaryAppDataContainer_19,
} from "./types/19";
import { objectURN as EventLog_20URN, EventLog_20 } from "./types/20";
import {
  objectURN as VirtualObserveNotify_22URN,
  VirtualObserveNotify_22,
} from "./types/22";
import { objectURN as MQTTServer_24URN, MQTTServer_24 } from "./types/24";
import { objectURN as LwM2MGateway_25URN, LwM2MGateway_25 } from "./types/25";
import {
  objectURN as LwM2MGatewayRouting_26URN,
  LwM2MGatewayRouting_26,
} from "./types/26";
import {
  objectURN as n5GNRConnectivity_27URN,
  n5GNRConnectivity_27,
} from "./types/27";
import {
  objectURN as DeviceRFCapabilities_28URN,
  DeviceRFCapabilities_28,
} from "./types/28";
import { objectURN as CoAPConfig_500URN, CoAPConfig_500 } from "./types/500";
import {
  objectURN as LTE_MTCBandConfig_501URN,
  LTE_MTCBandConfig_501,
} from "./types/501";
import { objectURN as CODetector_502URN, CODetector_502 } from "./types/502";
import { objectURN as FireAlarm_503URN, FireAlarm_503 } from "./types/503";
import {
  objectURN as RemoteSIMProvisioning_504URN,
  RemoteSIMProvisioning_504,
} from "./types/504";
import {
  objectURN as LwM2MSIMProvisioning_505URN,
  LwM2MSIMProvisioning_505,
} from "./types/505";
import {
  objectURN as nuSIMProfile_507URN,
  nuSIMProfile_507,
} from "./types/507";
import { objectURN as nuSIM_508URN, nuSIM_508 } from "./types/508";
import {
  objectURN as MeasurementMetadata_509URN,
  MeasurementMetadata_509,
} from "./types/509";
import {
  objectURN as VendorSpecificMeasurementQualityReason_510URN,
  VendorSpecificMeasurementQualityReason_510,
} from "./types/510";
import { objectURN as CmdhPolicy_2048URN, CmdhPolicy_2048 } from "./types/2048";
import {
  objectURN as ActiveCmdhPolicy_2049URN,
  ActiveCmdhPolicy_2049,
} from "./types/2049";
import {
  objectURN as CmdhDefaults_2050URN,
  CmdhDefaults_2050,
} from "./types/2050";
import {
  objectURN as CmdhDefEcValues_2051URN,
  CmdhDefEcValues_2051,
} from "./types/2051";
import {
  objectURN as CmdhEcDefParamValues_2052URN,
  CmdhEcDefParamValues_2052,
} from "./types/2052";
import { objectURN as CmdhLimits_2053URN, CmdhLimits_2053 } from "./types/2053";
import {
  objectURN as CmdhNetworkAccessRules_2054URN,
  CmdhNetworkAccessRules_2054,
} from "./types/2054";
import {
  objectURN as CmdhNwAccessRule_2055URN,
  CmdhNwAccessRule_2055,
} from "./types/2055";
import { objectURN as CmdhBuffer_2056URN, CmdhBuffer_2056 } from "./types/2056";
import {
  objectURN as CmdhBackOffParametersSet_2057URN,
  CmdhBackOffParametersSet_2057,
} from "./types/2057";
import {
  objectURN as DigitalInput_3200URN,
  DigitalInput_3200,
} from "./types/3200";
import {
  objectURN as DigitalOutput_3201URN,
  DigitalOutput_3201,
} from "./types/3201";
import {
  objectURN as AnalogInput_3202URN,
  AnalogInput_3202,
} from "./types/3202";
import {
  objectURN as AnalogOutput_3203URN,
  AnalogOutput_3203,
} from "./types/3203";
import {
  objectURN as GenericSensor_3300URN,
  GenericSensor_3300,
} from "./types/3300";
import {
  objectURN as Illuminance_3301URN,
  Illuminance_3301,
} from "./types/3301";
import { objectURN as Presence_3302URN, Presence_3302 } from "./types/3302";
import {
  objectURN as Temperature_3303URN,
  Temperature_3303,
} from "./types/3303";
import { objectURN as Humidity_3304URN, Humidity_3304 } from "./types/3304";
import {
  objectURN as PowerMeasurement_3305URN,
  PowerMeasurement_3305,
} from "./types/3305";
import { objectURN as Actuation_3306URN, Actuation_3306 } from "./types/3306";
import { objectURN as SetPoint_3308URN, SetPoint_3308 } from "./types/3308";
import {
  objectURN as LoadControl_3310URN,
  LoadControl_3310,
} from "./types/3310";
import {
  objectURN as LightControl_3311URN,
  LightControl_3311,
} from "./types/3311";
import {
  objectURN as PowerControl_3312URN,
  PowerControl_3312,
} from "./types/3312";
import {
  objectURN as Accelerometer_3313URN,
  Accelerometer_3313,
} from "./types/3313";
import {
  objectURN as Magnetometer_3314URN,
  Magnetometer_3314,
} from "./types/3314";
import { objectURN as Barometer_3315URN, Barometer_3315 } from "./types/3315";
import { objectURN as Voltage_3316URN, Voltage_3316 } from "./types/3316";
import { objectURN as Current_3317URN, Current_3317 } from "./types/3317";
import { objectURN as Frequency_3318URN, Frequency_3318 } from "./types/3318";
import { objectURN as Depth_3319URN, Depth_3319 } from "./types/3319";
import { objectURN as Percentage_3320URN, Percentage_3320 } from "./types/3320";
import { objectURN as Altitude_3321URN, Altitude_3321 } from "./types/3321";
import { objectURN as Load_3322URN, Load_3322 } from "./types/3322";
import { objectURN as Pressure_3323URN, Pressure_3323 } from "./types/3323";
import { objectURN as Loudness_3324URN, Loudness_3324 } from "./types/3324";
import {
  objectURN as Concentration_3325URN,
  Concentration_3325,
} from "./types/3325";
import { objectURN as Acidity_3326URN, Acidity_3326 } from "./types/3326";
import {
  objectURN as Conductivity_3327URN,
  Conductivity_3327,
} from "./types/3327";
import { objectURN as Power_3328URN, Power_3328 } from "./types/3328";
import {
  objectURN as PowerFactor_3329URN,
  PowerFactor_3329,
} from "./types/3329";
import { objectURN as Distance_3330URN, Distance_3330 } from "./types/3330";
import { objectURN as Energy_3331URN, Energy_3331 } from "./types/3331";
import { objectURN as Direction_3332URN, Direction_3332 } from "./types/3332";
import { objectURN as Time_3333URN, Time_3333 } from "./types/3333";
import { objectURN as Gyrometer_3334URN, Gyrometer_3334 } from "./types/3334";
import { objectURN as Colour_3335URN, Colour_3335 } from "./types/3335";
import { objectURN as Location_3336URN, Location_3336 } from "./types/3336";
import { objectURN as Positioner_3337URN, Positioner_3337 } from "./types/3337";
import { objectURN as Buzzer_3338URN, Buzzer_3338 } from "./types/3338";
import { objectURN as AudioClip_3339URN, AudioClip_3339 } from "./types/3339";
import { objectURN as Timer_3340URN, Timer_3340 } from "./types/3340";
import {
  objectURN as AddressableTextDisplay_3341URN,
  AddressableTextDisplay_3341,
} from "./types/3341";
import {
  objectURN as On_Offswitch_3342URN,
  On_Offswitch_3342,
} from "./types/3342";
import { objectURN as Dimmer_3343URN, Dimmer_3343 } from "./types/3343";
import {
  objectURN as Up_DownControl_3344URN,
  Up_DownControl_3344,
} from "./types/3344";
import {
  objectURN as MultipleAxisJoystick_3345URN,
  MultipleAxisJoystick_3345,
} from "./types/3345";
import { objectURN as Rate_3346URN, Rate_3346 } from "./types/3346";
import { objectURN as Pushbutton_3347URN, Pushbutton_3347 } from "./types/3347";
import {
  objectURN as Multi_stateSelector_3348URN,
  Multi_stateSelector_3348,
} from "./types/3348";
import { objectURN as Bitmap_3349URN, Bitmap_3349 } from "./types/3349";
import { objectURN as Stopwatch_3350URN, Stopwatch_3350 } from "./types/3350";
import { objectURN as powerupLog_3351URN, powerupLog_3351 } from "./types/3351";
import {
  objectURN as plmnSearchEvent_3352URN,
  plmnSearchEvent_3352,
} from "./types/3352";
import { objectURN as scellID_3353URN, scellID_3353 } from "./types/3353";
import {
  objectURN as cellReselectionEvent_3354URN,
  cellReselectionEvent_3354,
} from "./types/3354";
import {
  objectURN as handoverEvent_3355URN,
  handoverEvent_3355,
} from "./types/3355";
import {
  objectURN as radioLinkFailureEvent_3356URN,
  radioLinkFailureEvent_3356,
} from "./types/3356";
import {
  objectURN as rrcStateChangeEvent_3357URN,
  rrcStateChangeEvent_3357,
} from "./types/3357";
import {
  objectURN as rrcTimerExpiryEvent_3358URN,
  rrcTimerExpiryEvent_3358,
} from "./types/3358";
import {
  objectURN as cellBlacklistEvent_3359URN,
  cellBlacklistEvent_3359,
} from "./types/3359";
import {
  objectURN as esmContextInfo_3360URN,
  esmContextInfo_3360,
} from "./types/3360";
import {
  objectURN as emmStateValue_3361URN,
  emmStateValue_3361,
} from "./types/3361";
import {
  objectURN as nasEmmTimerExpiryEvent_3362URN,
  nasEmmTimerExpiryEvent_3362,
} from "./types/3362";
import {
  objectURN as nasEsmExpiryEvent_3363URN,
  nasEsmExpiryEvent_3363,
} from "./types/3363";
import {
  objectURN as emmFailureCauseEvent_3364URN,
  emmFailureCauseEvent_3364,
} from "./types/3364";
import {
  objectURN as rachLatency_delay_3365URN,
  rachLatency_delay_3365,
} from "./types/3365";
import {
  objectURN as macRachAttemptEvent_3366URN,
  macRachAttemptEvent_3366,
} from "./types/3366";
import {
  objectURN as macRachAttemptReasonEvent_3367URN,
  macRachAttemptReasonEvent_3367,
} from "./types/3367";
import {
  objectURN as macTimerStatusEvent_3368URN,
  macTimerStatusEvent_3368,
} from "./types/3368";
import {
  objectURN as macTimingAdvanceEvent_3369URN,
  macTimingAdvanceEvent_3369,
} from "./types/3369";
import {
  objectURN as ServingCellMeasurement_3370URN,
  ServingCellMeasurement_3370,
} from "./types/3370";
import {
  objectURN as NeighborCellMeasurements_3371URN,
  NeighborCellMeasurements_3371,
} from "./types/3371";
import {
  objectURN as TimingAdvance_3372URN,
  TimingAdvance_3372,
} from "./types/3372";
import {
  objectURN as txPowerHeadroomEvent_3373URN,
  txPowerHeadroomEvent_3373,
} from "./types/3373";
import {
  objectURN as radioLinkMonitoring_3374URN,
  radioLinkMonitoring_3374,
} from "./types/3374";
import { objectURN as PagingDRX_3375URN, PagingDRX_3375 } from "./types/3375";
import {
  objectURN as txPowerBackOffEvent_3376URN,
  txPowerBackOffEvent_3376,
} from "./types/3376";
import {
  objectURN as Message3Report_3377URN,
  Message3Report_3377,
} from "./types/3377";
import {
  objectURN as PbchDecodingResults_3378URN,
  PbchDecodingResults_3378,
} from "./types/3378";
import {
  objectURN as pucchPowerControl_3379URN,
  pucchPowerControl_3379,
} from "./types/3379";
import {
  objectURN as PrachReport_3380URN,
  PrachReport_3380,
} from "./types/3380";
import {
  objectURN as VolteCallEvent_3381URN,
  VolteCallEvent_3381,
} from "./types/3381";
import {
  objectURN as SipRegistrationEvent_3382URN,
  SipRegistrationEvent_3382,
} from "./types/3382";
import {
  objectURN as sipPublishEvent_3383URN,
  sipPublishEvent_3383,
} from "./types/3383";
import {
  objectURN as sipSubscriptionEvent_3384URN,
  sipSubscriptionEvent_3384,
} from "./types/3384";
import {
  objectURN as volteCallStateChangeEvent_3385URN,
  volteCallStateChangeEvent_3385,
} from "./types/3385";
import {
  objectURN as VoLTErtpPacketLoss_3386URN,
  VoLTErtpPacketLoss_3386,
} from "./types/3386";
import {
  objectURN as oABasicControl_3387URN,
  oABasicControl_3387,
} from "./types/3387";
import { objectURN as oADevice_3388URN, oADevice_3388 } from "./types/3388";
import { objectURN as oAGroup_3389URN, oAGroup_3389 } from "./types/3389";
import {
  objectURN as oALogicalColourLight_PointActuator_3390URN,
  oALogicalColourLight_PointActuator_3390,
} from "./types/3390";
import {
  objectURN as oALogicalColourTemperatureLight_PointActuator_3391URN,
  oALogicalColourTemperatureLight_PointActuator_3391,
} from "./types/3391";
import {
  objectURN as oALogicalIlluminanceSensor_3392URN,
  oALogicalIlluminanceSensor_3392,
} from "./types/3392";
import {
  objectURN as oALogicalLight_PointActuator_3393URN,
  oALogicalLight_PointActuator_3393,
} from "./types/3393";
import {
  objectURN as oALogicalPresenceSensor_3394URN,
  oALogicalPresenceSensor_3394,
} from "./types/3394";
import {
  objectURN as oALogicalPush_ButtonSensor_3395URN,
  oALogicalPush_ButtonSensor_3395,
} from "./types/3395";
import {
  objectURN as oAPhysicalColourLight_PointActuator_3396URN,
  oAPhysicalColourLight_PointActuator_3396,
} from "./types/3396";
import {
  objectURN as oAPhysicalColourTemperatureLight_PointActuator_3397URN,
  oAPhysicalColourTemperatureLight_PointActuator_3397,
} from "./types/3397";
import {
  objectURN as oAPhysicalIlluminanceSensor_3398URN,
  oAPhysicalIlluminanceSensor_3398,
} from "./types/3398";
import {
  objectURN as oAPhysicalLight_PointActuator_3399URN,
  oAPhysicalLight_PointActuator_3399,
} from "./types/3399";
import {
  objectURN as oAPhysicalPresenceSensor_3400URN,
  oAPhysicalPresenceSensor_3400,
} from "./types/3400";
import {
  objectURN as oAPhysicalPush_ButtonSensor_3401URN,
  oAPhysicalPush_ButtonSensor_3401,
} from "./types/3401";
import {
  objectURN as oAReceivingObject_3402URN,
  oAReceivingObject_3402,
} from "./types/3402";
import {
  objectURN as oAReportingObject_3403URN,
  oAReportingObject_3403,
} from "./types/3403";
import { objectURN as oAScene_3404URN, oAScene_3404 } from "./types/3404";
import {
  objectURN as oAOGC_Security_3405URN,
  oAOGC_Security_3405,
} from "./types/3405";
import {
  objectURN as oAStatusReportStructure_3406URN,
  oAStatusReportStructure_3406,
} from "./types/3406";
import { objectURN as SmokeAlarm_3407URN, SmokeAlarm_3407 } from "./types/3407";
import {
  objectURN as ManholeCover_3408URN,
  ManholeCover_3408,
} from "./types/3408";
import {
  objectURN as DeviceExtension_3410URN,
  DeviceExtension_3410,
} from "./types/3410";
import { objectURN as Battery_3411URN, Battery_3411 } from "./types/3411";
import {
  objectURN as LPWANCommunication_3412URN,
  LPWANCommunication_3412,
} from "./types/3412";
import {
  objectURN as uCIFIGenericActuator_3413URN,
  uCIFIGenericActuator_3413,
} from "./types/3413";
import {
  objectURN as uCIFIdatabridge_3414URN,
  uCIFIdatabridge_3414,
} from "./types/3414";
import {
  objectURN as Timesynchronization_3415URN,
  Timesynchronization_3415,
} from "./types/3415";
import {
  objectURN as Outdoorlampcontroller_3416URN,
  Outdoorlampcontroller_3416,
} from "./types/3416";
import {
  objectURN as Luminaireasset_3417URN,
  Luminaireasset_3417,
} from "./types/3417";
import {
  objectURN as Electricalmonitor_3418URN,
  Electricalmonitor_3418,
} from "./types/3418";
import { objectURN as Photocell_3419URN, Photocell_3419 } from "./types/3419";
import {
  objectURN as LEDcolorlight_3420URN,
  LEDcolorlight_3420,
} from "./types/3420";
import {
  objectURN as Single_phaseelectricalmeter_3421URN,
  Single_phaseelectricalmeter_3421,
} from "./types/3421";
import { objectURN as Gasmeter_3423URN, Gasmeter_3423 } from "./types/3423";
import { objectURN as Watermeter_3424URN, Watermeter_3424 } from "./types/3424";
import {
  objectURN as Irrigationvalve_3425URN,
  Irrigationvalve_3425,
} from "./types/3425";
import {
  objectURN as Waterqualitysensor_3426URN,
  Waterqualitysensor_3426,
} from "./types/3426";
import {
  objectURN as Pressuremonitoringsensor_3427URN,
  Pressuremonitoringsensor_3427,
} from "./types/3427";
import { objectURN as Airquality_3428URN, Airquality_3428 } from "./types/3428";
import { objectURN as Tiltsensor_3429URN, Tiltsensor_3429 } from "./types/3429";
import {
  objectURN as GlobalNavigationSatelliteSystem_3430URN,
  GlobalNavigationSatelliteSystem_3430,
} from "./types/3430";
import {
  objectURN as ParkingSensor_3431URN,
  ParkingSensor_3431,
} from "./types/3431";
import {
  objectURN as TrafficCounter_3432URN,
  TrafficCounter_3432,
} from "./types/3432";
import {
  objectURN as Noisesensor_3433URN,
  Noisesensor_3433,
} from "./types/3433";
import {
  objectURN as Peoplecounter_3434URN,
  Peoplecounter_3434,
} from "./types/3434";
import {
  objectURN as Fillinglevel_3435URN,
  Fillinglevel_3435,
} from "./types/3435";
import {
  objectURN as Edgecomputingmanager_3436URN,
  Edgecomputingmanager_3436,
} from "./types/3436";
import {
  objectURN as Edgecomputingscript_3437URN,
  Edgecomputingscript_3437,
} from "./types/3437";
import {
  objectURN as Edgecomputingtimecondition_3438URN,
  Edgecomputingtimecondition_3438,
} from "./types/3438";
import {
  objectURN as Edgecomputinggenericcondition_3439URN,
  Edgecomputinggenericcondition_3439,
} from "./types/3439";
import {
  objectURN as LwM2Mv1_0TestObject_3441URN,
  LwM2Mv1_0TestObject_3441,
} from "./types/3441";
import {
  objectURN as LwM2Mv1_1TestObject_3442URN,
  LwM2Mv1_1TestObject_3442,
} from "./types/3442";
import {
  objectURN as HostDeviceInfo_10241URN,
  HostDeviceInfo_10241,
} from "./types/10241";
import {
  objectURN as n3_PhasePowerMeter_10242URN,
  n3_PhasePowerMeter_10242,
} from "./types/10242";
import {
  objectURN as Single_PhasePowerMeter_10243URN,
  Single_PhasePowerMeter_10243,
} from "./types/10243";
import {
  objectURN as VehicleControlUnit_10244URN,
  VehicleControlUnit_10244,
} from "./types/10244";
import {
  objectURN as RelayManagement_10245URN,
  RelayManagement_10245,
} from "./types/10245";
import {
  objectURN as CrowdBoxMeasurements_10246URN,
  CrowdBoxMeasurements_10246,
} from "./types/10246";
import {
  objectURN as NeighbourCellReport_10247URN,
  NeighbourCellReport_10247,
} from "./types/10247";
import {
  objectURN as ConnectedUEMeasurements_10248URN,
  ConnectedUEMeasurements_10248,
} from "./types/10248";
import {
  objectURN as ConnectedUEReport_10249URN,
  ConnectedUEReport_10249,
} from "./types/10249";
import {
  objectURN as AppDataContainer_10250URN,
  AppDataContainer_10250,
} from "./types/10250";
import {
  objectURN as ATCommand_10251URN,
  ATCommand_10251,
} from "./types/10251";
import { objectURN as Manifest_10252URN, Manifest_10252 } from "./types/10252";
import {
  objectURN as ConfidentialData_10253URN,
  ConfidentialData_10253,
} from "./types/10253";
import {
  objectURN as CurrentLoopInput_10254URN,
  CurrentLoopInput_10254,
} from "./types/10254";
import {
  objectURN as DeviceMetadata_10255URN,
  DeviceMetadata_10255,
} from "./types/10255";
import {
  objectURN as ECID_SignalMeasurementInformation_10256URN,
  ECID_SignalMeasurementInformation_10256,
} from "./types/10256";
import {
  objectURN as Heat_Coolingmeter_10257URN,
  Heat_Coolingmeter_10257,
} from "./types/10257";
import {
  objectURN as CurrentLoopOutput_10258URN,
  CurrentLoopOutput_10258,
} from "./types/10258";
import {
  objectURN as SystemLog_10259URN,
  SystemLog_10259,
} from "./types/10259";
import { objectURN as RDB_10260URN, RDB_10260 } from "./types/10260";
import {
  objectURN as IntervalDataDelivery_10262URN,
  IntervalDataDelivery_10262,
} from "./types/10262";
import {
  objectURN as EventDataDelivery_10263URN,
  EventDataDelivery_10263,
} from "./types/10263";
import {
  objectURN as DeliverySchedule_10264URN,
  DeliverySchedule_10264,
} from "./types/10264";
import {
  objectURN as LeakageDetectionConfiguration_10265URN,
  LeakageDetectionConfiguration_10265,
} from "./types/10265";
import {
  objectURN as WaterFlowReadings_10266URN,
  WaterFlowReadings_10266,
} from "./types/10266";
import {
  objectURN as DailyMaximumFlowRateReadings_10267URN,
  DailyMaximumFlowRateReadings_10267,
} from "./types/10267";
import {
  objectURN as TemperatureReadings_10268URN,
  TemperatureReadings_10268,
} from "./types/10268";
import {
  objectURN as PressureReadings_10269URN,
  PressureReadings_10269,
} from "./types/10269";
import {
  objectURN as BatteryLevelReadings_10270URN,
  BatteryLevelReadings_10270,
} from "./types/10270";
import {
  objectURN as CommunicationsActivityTimeReadings_10271URN,
  CommunicationsActivityTimeReadings_10271,
} from "./types/10271";
import {
  objectURN as WaterMeterCustomerLeakageAlarm_10272URN,
  WaterMeterCustomerLeakageAlarm_10272,
} from "./types/10272";
import {
  objectURN as WaterMeterReverseFlowAlarm_10273URN,
  WaterMeterReverseFlowAlarm_10273,
} from "./types/10273";
import {
  objectURN as WaterMeterEmptyPipeAlarm_10274URN,
  WaterMeterEmptyPipeAlarm_10274,
} from "./types/10274";
import {
  objectURN as WaterMeterTamperAlarm_10275URN,
  WaterMeterTamperAlarm_10275,
} from "./types/10275";
import {
  objectURN as WaterMeterHighPressureAlarm_10276URN,
  WaterMeterHighPressureAlarm_10276,
} from "./types/10276";
import {
  objectURN as WaterMeterLowPressureAlarm_10277URN,
  WaterMeterLowPressureAlarm_10277,
} from "./types/10277";
import {
  objectURN as HighTemperatureAlarm_10278URN,
  HighTemperatureAlarm_10278,
} from "./types/10278";
import {
  objectURN as LowTemperatureAlarm_10279URN,
  LowTemperatureAlarm_10279,
} from "./types/10279";
import {
  objectURN as WaterNetworkLeakAlarm_10280URN,
  WaterNetworkLeakAlarm_10280,
} from "./types/10280";
import {
  objectURN as LowBatteryAlarm_10281URN,
  LowBatteryAlarm_10281,
} from "./types/10281";
import {
  objectURN as DaughterBoardFailureAlarm_10282URN,
  DaughterBoardFailureAlarm_10282,
} from "./types/10282";
import {
  objectURN as DeviceRebootEvent_10283URN,
  DeviceRebootEvent_10283,
} from "./types/10283";
import {
  objectURN as TimeSynchronisationEvent_10284URN,
  TimeSynchronisationEvent_10284,
} from "./types/10284";
import {
  objectURN as AppFotaContainer_10286URN,
  AppFotaContainer_10286,
} from "./types/10286";
import {
  objectURN as VoltageLogging_10290URN,
  VoltageLogging_10290,
} from "./types/10290";
import {
  objectURN as VoltageTransient_10291URN,
  VoltageTransient_10291,
} from "./types/10291";
import {
  objectURN as PressureTransient_10292URN,
  PressureTransient_10292,
} from "./types/10292";
import {
  objectURN as HostDevice_10299URN,
  HostDevice_10299,
} from "./types/10299";
import {
  objectURN as LWM2MMetaObject_10300URN,
  LWM2MMetaObject_10300,
} from "./types/10300";
import {
  objectURN as ATandTConnectivityExtension_10308URN,
  ATandTConnectivityExtension_10308,
} from "./types/10308";
import {
  objectURN as Shareparkinglot_10309URN,
  Shareparkinglot_10309,
} from "./types/10309";
import {
  objectURN as SolarRadiation_10311URN,
  SolarRadiation_10311,
} from "./types/10311";
import {
  objectURN as GasReadings_10313URN,
  GasReadings_10313,
} from "./types/10313";
import {
  objectURN as Particulates_10314URN,
  Particulates_10314,
} from "./types/10314";
import { objectURN as Robot_10315URN, Robot_10315 } from "./types/10315";
import { objectURN as RCU_10316URN, RCU_10316 } from "./types/10316";
import { objectURN as RCUPM_10318URN, RCUPM_10318 } from "./types/10318";
import {
  objectURN as RCUControl_10319URN,
  RCUControl_10319,
} from "./types/10319";
import { objectURN as CCU_10320URN, CCU_10320 } from "./types/10320";
import { objectURN as CCUPM_10322URN, CCUPM_10322 } from "./types/10322";
import {
  objectURN as CCUControl_10323URN,
  CCUControl_10323,
} from "./types/10323";
import { objectURN as ECU_10324URN, ECU_10324 } from "./types/10324";
import { objectURN as RobotPM_10326URN, RobotPM_10326 } from "./types/10326";
import {
  objectURN as Compressor_10327URN,
  Compressor_10327,
} from "./types/10327";
import { objectURN as SCAPM_10328URN, SCAPM_10328 } from "./types/10328";
import {
  objectURN as RobotControl_10329URN,
  RobotControl_10329,
} from "./types/10329";
import {
  objectURN as NetworkInfo_10330URN,
  NetworkInfo_10330,
} from "./types/10330";
import {
  objectURN as RobotServiceInfo_10331URN,
  RobotServiceInfo_10331,
} from "./types/10331";
import {
  objectURN as RobotSelfcheckInfo_10332URN,
  RobotSelfcheckInfo_10332,
} from "./types/10332";
import {
  objectURN as PMThreshold_10333URN,
  PMThreshold_10333,
} from "./types/10333";
import {
  objectURN as RobotAlarm_10334URN,
  RobotAlarm_10334,
} from "./types/10334";
import { objectURN as Event_10335URN, Event_10335 } from "./types/10335";
import { objectURN as MIC_10336URN, MIC_10336 } from "./types/10336";
import { objectURN as SCA_10337URN, SCA_10337 } from "./types/10337";
import { objectURN as Speaker_10338URN, Speaker_10338 } from "./types/10338";
import {
  objectURN as TripodHead_10339URN,
  TripodHead_10339,
} from "./types/10339";
import { objectURN as Camera_10340URN, Camera_10340 } from "./types/10340";
import { objectURN as GPS_10341URN, GPS_10341 } from "./types/10341";
import { objectURN as IMU_10342URN, IMU_10342 } from "./types/10342";
import { objectURN as LiDAR_10343URN, LiDAR_10343 } from "./types/10343";
import { objectURN as Arm_10344URN, Arm_10344 } from "./types/10344";
import { objectURN as Leg_10345URN, Leg_10345 } from "./types/10345";
import {
  objectURN as Servomotor_10346URN,
  Servomotor_10346,
} from "./types/10346";
import { objectURN as Screen_10347URN, Screen_10347 } from "./types/10347";
import { objectURN as Wheel_10348URN, Wheel_10348 } from "./types/10348";
import { objectURN as Chassis_10349URN, Chassis_10349 } from "./types/10349";
import { objectURN as Light_10350URN, Light_10350 } from "./types/10350";
import { objectURN as Door_10351URN, Door_10351 } from "./types/10351";
import {
  objectURN as ThermalImager_10352URN,
  ThermalImager_10352,
} from "./types/10352";
import {
  objectURN as WarningLight_10353URN,
  WarningLight_10353,
} from "./types/10353";
import { objectURN as APP_10354URN, APP_10354 } from "./types/10354";
import {
  objectURN as GeneralInfo_10355URN,
  GeneralInfo_10355,
} from "./types/10355";
import {
  objectURN as ServiceInfo_10356URN,
  ServiceInfo_10356,
} from "./types/10356";
import { objectURN as PM_10357URN, PM_10357 } from "./types/10357";
import { objectURN as FanPM_10358URN, FanPM_10358 } from "./types/10358";
import { objectURN as Lock_10359URN, Lock_10359 } from "./types/10359";
import {
  objectURN as UltrasonicSensor_10360URN,
  UltrasonicSensor_10360,
} from "./types/10360";
import {
  objectURN as CollisionSensor_10361URN,
  CollisionSensor_10361,
} from "./types/10361";
import {
  objectURN as DropSensor_10362URN,
  DropSensor_10362,
} from "./types/10362";
import {
  objectURN as TemperatureSensor_10363URN,
  TemperatureSensor_10363,
} from "./types/10363";
import {
  objectURN as HumiditySensor_10364URN,
  HumiditySensor_10364,
} from "./types/10364";
import {
  objectURN as Gas_DustSensor_10365URN,
  Gas_DustSensor_10365,
} from "./types/10365";
import { objectURN as Fan_10366URN, Fan_10366 } from "./types/10366";
import {
  objectURN as SpringMotor_10368URN,
  SpringMotor_10368,
} from "./types/10368";
import { objectURN as MCU_10369URN, MCU_10369 } from "./types/10369";
import {
  objectURN as RebootStatus_10371URN,
  RebootStatus_10371,
} from "./types/10371";
import {
  objectURN as ModbusConnection_10374URN,
  ModbusConnection_10374,
} from "./types/10374";
import {
  objectURN as ModbusRegisterCluster_10375URN,
  ModbusRegisterCluster_10375,
} from "./types/10375";
import {
  objectURN as PeriodicActivity_10376URN,
  PeriodicActivity_10376,
} from "./types/10376";
import {
  objectURN as DataMonitoring_10377URN,
  DataMonitoring_10377,
} from "./types/10377";
import {
  objectURN as EdgeApplicationServerConfiguration_10378URN,
  EdgeApplicationServerConfiguration_10378,
} from "./types/10378";
import {
  objectURN as MQTTBroker_18830URN,
  MQTTBroker_18830,
} from "./types/18830";
import {
  objectURN as MQTTPublication_18831URN,
  MQTTPublication_18831,
} from "./types/18831";
export const LwM2MDocument = Type.Object(
  {
    /**
     * 1: LwM2M Server
     */
    [LwM2MServer_1URN]: Type.Optional(LwM2MServer_1),
    /**
     * 2: LwM2M Access Control
     */
    [LwM2MAccessControl_2URN]: Type.Optional(LwM2MAccessControl_2),
    /**
     * 3: Device
     */
    [Device_3URN]: Type.Optional(Device_3),
    /**
     * 4: Connectivity Monitoring
     */
    [ConnectivityMonitoring_4URN]: Type.Optional(ConnectivityMonitoring_4),
    /**
     * 5: Firmware Update
     */
    [FirmwareUpdate_5URN]: Type.Optional(FirmwareUpdate_5),
    /**
     * 6: Location
     */
    [Location_6URN]: Type.Optional(Location_6),
    /**
     * 7: Connectivity Statistics
     */
    [ConnectivityStatistics_7URN]: Type.Optional(ConnectivityStatistics_7),
    /**
     * 8: Lock and Wipe
     */
    [LockandWipe_8URN]: Type.Optional(LockandWipe_8),
    /**
     * 9: LWM2M Software Management
     */
    [LWM2MSoftwareManagement_9URN]: Type.Optional(LWM2MSoftwareManagement_9),
    /**
     * 10: LWM2M Cellular Connectivity
     */
    [LWM2MCellularConnectivity_10URN]: Type.Optional(
      LWM2MCellularConnectivity_10
    ),
    /**
     * 11: LWM2M APN Connection Profile
     */
    [LWM2MAPNConnectionProfile_11URN]: Type.Optional(
      LWM2MAPNConnectionProfile_11
    ),
    /**
     * 12: WLAN connectivity
     */
    [WLANconnectivity_12URN]: Type.Optional(WLANconnectivity_12),
    /**
     * 13: LWM2M Bearer Selection
     */
    [LWM2MBearerSelection_13URN]: Type.Optional(LWM2MBearerSelection_13),
    /**
     * 14: LWM2M Software Component
     */
    [LWM2MSoftwareComponent_14URN]: Type.Optional(LWM2MSoftwareComponent_14),
    /**
     * 15: DevCapMgmt
     */
    [DevCapMgmt_15URN]: Type.Optional(DevCapMgmt_15),
    /**
     * 16: Portfolio
     */
    [Portfolio_16URN]: Type.Optional(Portfolio_16),
    /**
     * 19: BinaryAppDataContainer
     */
    [BinaryAppDataContainer_19URN]: Type.Optional(BinaryAppDataContainer_19),
    /**
     * 20: Event Log
     */
    [EventLog_20URN]: Type.Optional(EventLog_20),
    /**
     * 22: Virtual Observe Notify
     */
    [VirtualObserveNotify_22URN]: Type.Optional(VirtualObserveNotify_22),
    /**
     * 24: MQTT Server
     */
    [MQTTServer_24URN]: Type.Optional(MQTTServer_24),
    /**
     * 25: LwM2M Gateway
     */
    [LwM2MGateway_25URN]: Type.Optional(LwM2MGateway_25),
    /**
     * 26: LwM2M Gateway Routing
     */
    [LwM2MGatewayRouting_26URN]: Type.Optional(LwM2MGatewayRouting_26),
    /**
     * 27: 5GNR Connectivity
     */
    [n5GNRConnectivity_27URN]: Type.Optional(n5GNRConnectivity_27),
    /**
     * 28: Device RF Capabilities
     */
    [DeviceRFCapabilities_28URN]: Type.Optional(DeviceRFCapabilities_28),
    /**
     * 500: CoAP Config
     */
    [CoAPConfig_500URN]: Type.Optional(CoAPConfig_500),
    /**
     * 501: LTE-MTC Band Config
     */
    [LTE_MTCBandConfig_501URN]: Type.Optional(LTE_MTCBandConfig_501),
    /**
     * 502: CO Detector
     */
    [CODetector_502URN]: Type.Optional(CODetector_502),
    /**
     * 503: Fire Alarm
     */
    [FireAlarm_503URN]: Type.Optional(FireAlarm_503),
    /**
     * 504: Remote SIM Provisioning
     */
    [RemoteSIMProvisioning_504URN]: Type.Optional(RemoteSIMProvisioning_504),
    /**
     * 505: LwM2M SIM Provisioning
     */
    [LwM2MSIMProvisioning_505URN]: Type.Optional(LwM2MSIMProvisioning_505),
    /**
     * 507: nuSIM Profile
     */
    [nuSIMProfile_507URN]: Type.Optional(nuSIMProfile_507),
    /**
     * 508: nuSIM
     */
    [nuSIM_508URN]: Type.Optional(nuSIM_508),
    /**
     * 509: Measurement Metadata
     */
    [MeasurementMetadata_509URN]: Type.Optional(MeasurementMetadata_509),
    /**
     * 510: Vendor Specific Measurement Quality Reason
     */
    [VendorSpecificMeasurementQualityReason_510URN]: Type.Optional(
      VendorSpecificMeasurementQualityReason_510
    ),
    /**
     * 2048: CmdhPolicy
     */
    [CmdhPolicy_2048URN]: Type.Optional(CmdhPolicy_2048),
    /**
     * 2049: ActiveCmdhPolicy
     */
    [ActiveCmdhPolicy_2049URN]: Type.Optional(ActiveCmdhPolicy_2049),
    /**
     * 2050: CmdhDefaults
     */
    [CmdhDefaults_2050URN]: Type.Optional(CmdhDefaults_2050),
    /**
     * 2051: CmdhDefEcValues
     */
    [CmdhDefEcValues_2051URN]: Type.Optional(CmdhDefEcValues_2051),
    /**
     * 2052: CmdhEcDefParamValues
     */
    [CmdhEcDefParamValues_2052URN]: Type.Optional(CmdhEcDefParamValues_2052),
    /**
     * 2053: CmdhLimits
     */
    [CmdhLimits_2053URN]: Type.Optional(CmdhLimits_2053),
    /**
     * 2054: CmdhNetworkAccessRules
     */
    [CmdhNetworkAccessRules_2054URN]: Type.Optional(
      CmdhNetworkAccessRules_2054
    ),
    /**
     * 2055: CmdhNwAccessRule
     */
    [CmdhNwAccessRule_2055URN]: Type.Optional(CmdhNwAccessRule_2055),
    /**
     * 2056: CmdhBuffer
     */
    [CmdhBuffer_2056URN]: Type.Optional(CmdhBuffer_2056),
    /**
     * 2057: CmdhBackOffParametersSet
     */
    [CmdhBackOffParametersSet_2057URN]: Type.Optional(
      CmdhBackOffParametersSet_2057
    ),
    /**
     * 3200: Digital Input
     */
    [DigitalInput_3200URN]: Type.Optional(DigitalInput_3200),
    /**
     * 3201: Digital Output
     */
    [DigitalOutput_3201URN]: Type.Optional(DigitalOutput_3201),
    /**
     * 3202: Analog Input
     */
    [AnalogInput_3202URN]: Type.Optional(AnalogInput_3202),
    /**
     * 3203: Analog Output
     */
    [AnalogOutput_3203URN]: Type.Optional(AnalogOutput_3203),
    /**
     * 3300: Generic Sensor
     */
    [GenericSensor_3300URN]: Type.Optional(GenericSensor_3300),
    /**
     * 3301: Illuminance
     */
    [Illuminance_3301URN]: Type.Optional(Illuminance_3301),
    /**
     * 3302: Presence
     */
    [Presence_3302URN]: Type.Optional(Presence_3302),
    /**
     * 3303: Temperature
     */
    [Temperature_3303URN]: Type.Optional(Temperature_3303),
    /**
     * 3304: Humidity
     */
    [Humidity_3304URN]: Type.Optional(Humidity_3304),
    /**
     * 3305: Power Measurement
     */
    [PowerMeasurement_3305URN]: Type.Optional(PowerMeasurement_3305),
    /**
     * 3306: Actuation
     */
    [Actuation_3306URN]: Type.Optional(Actuation_3306),
    /**
     * 3308: Set Point
     */
    [SetPoint_3308URN]: Type.Optional(SetPoint_3308),
    /**
     * 3310: Load Control
     */
    [LoadControl_3310URN]: Type.Optional(LoadControl_3310),
    /**
     * 3311: Light Control
     */
    [LightControl_3311URN]: Type.Optional(LightControl_3311),
    /**
     * 3312: Power Control
     */
    [PowerControl_3312URN]: Type.Optional(PowerControl_3312),
    /**
     * 3313: Accelerometer
     */
    [Accelerometer_3313URN]: Type.Optional(Accelerometer_3313),
    /**
     * 3314: Magnetometer
     */
    [Magnetometer_3314URN]: Type.Optional(Magnetometer_3314),
    /**
     * 3315: Barometer
     */
    [Barometer_3315URN]: Type.Optional(Barometer_3315),
    /**
     * 3316: Voltage
     */
    [Voltage_3316URN]: Type.Optional(Voltage_3316),
    /**
     * 3317: Current
     */
    [Current_3317URN]: Type.Optional(Current_3317),
    /**
     * 3318: Frequency
     */
    [Frequency_3318URN]: Type.Optional(Frequency_3318),
    /**
     * 3319: Depth
     */
    [Depth_3319URN]: Type.Optional(Depth_3319),
    /**
     * 3320: Percentage
     */
    [Percentage_3320URN]: Type.Optional(Percentage_3320),
    /**
     * 3321: Altitude
     */
    [Altitude_3321URN]: Type.Optional(Altitude_3321),
    /**
     * 3322: Load
     */
    [Load_3322URN]: Type.Optional(Load_3322),
    /**
     * 3323: Pressure
     */
    [Pressure_3323URN]: Type.Optional(Pressure_3323),
    /**
     * 3324: Loudness
     */
    [Loudness_3324URN]: Type.Optional(Loudness_3324),
    /**
     * 3325: Concentration
     */
    [Concentration_3325URN]: Type.Optional(Concentration_3325),
    /**
     * 3326: Acidity
     */
    [Acidity_3326URN]: Type.Optional(Acidity_3326),
    /**
     * 3327: Conductivity
     */
    [Conductivity_3327URN]: Type.Optional(Conductivity_3327),
    /**
     * 3328: Power
     */
    [Power_3328URN]: Type.Optional(Power_3328),
    /**
     * 3329: Power Factor
     */
    [PowerFactor_3329URN]: Type.Optional(PowerFactor_3329),
    /**
     * 3330: Distance
     */
    [Distance_3330URN]: Type.Optional(Distance_3330),
    /**
     * 3331: Energy
     */
    [Energy_3331URN]: Type.Optional(Energy_3331),
    /**
     * 3332: Direction
     */
    [Direction_3332URN]: Type.Optional(Direction_3332),
    /**
     * 3333: Time
     */
    [Time_3333URN]: Type.Optional(Time_3333),
    /**
     * 3334: Gyrometer
     */
    [Gyrometer_3334URN]: Type.Optional(Gyrometer_3334),
    /**
     * 3335: Colour
     */
    [Colour_3335URN]: Type.Optional(Colour_3335),
    /**
     * 3336: Location
     */
    [Location_3336URN]: Type.Optional(Location_3336),
    /**
     * 3337: Positioner
     */
    [Positioner_3337URN]: Type.Optional(Positioner_3337),
    /**
     * 3338: Buzzer
     */
    [Buzzer_3338URN]: Type.Optional(Buzzer_3338),
    /**
     * 3339: Audio Clip
     */
    [AudioClip_3339URN]: Type.Optional(AudioClip_3339),
    /**
     * 3340: Timer
     */
    [Timer_3340URN]: Type.Optional(Timer_3340),
    /**
     * 3341: Addressable Text Display
     */
    [AddressableTextDisplay_3341URN]: Type.Optional(
      AddressableTextDisplay_3341
    ),
    /**
     * 3342: On/Off switch
     */
    [On_Offswitch_3342URN]: Type.Optional(On_Offswitch_3342),
    /**
     * 3343: Dimmer
     */
    [Dimmer_3343URN]: Type.Optional(Dimmer_3343),
    /**
     * 3344: Up/Down Control
     */
    [Up_DownControl_3344URN]: Type.Optional(Up_DownControl_3344),
    /**
     * 3345: Multiple Axis Joystick
     */
    [MultipleAxisJoystick_3345URN]: Type.Optional(MultipleAxisJoystick_3345),
    /**
     * 3346: Rate
     */
    [Rate_3346URN]: Type.Optional(Rate_3346),
    /**
     * 3347: Push button
     */
    [Pushbutton_3347URN]: Type.Optional(Pushbutton_3347),
    /**
     * 3348: Multi-state Selector
     */
    [Multi_stateSelector_3348URN]: Type.Optional(Multi_stateSelector_3348),
    /**
     * 3349: Bitmap
     */
    [Bitmap_3349URN]: Type.Optional(Bitmap_3349),
    /**
     * 3350: Stopwatch
     */
    [Stopwatch_3350URN]: Type.Optional(Stopwatch_3350),
    /**
     * 3351: powerupLog
     */
    [powerupLog_3351URN]: Type.Optional(powerupLog_3351),
    /**
     * 3352: plmnSearchEvent
     */
    [plmnSearchEvent_3352URN]: Type.Optional(plmnSearchEvent_3352),
    /**
     * 3353: scellID
     */
    [scellID_3353URN]: Type.Optional(scellID_3353),
    /**
     * 3354: cellReselectionEvent
     */
    [cellReselectionEvent_3354URN]: Type.Optional(cellReselectionEvent_3354),
    /**
     * 3355: handoverEvent
     */
    [handoverEvent_3355URN]: Type.Optional(handoverEvent_3355),
    /**
     * 3356: radioLinkFailureEvent
     */
    [radioLinkFailureEvent_3356URN]: Type.Optional(radioLinkFailureEvent_3356),
    /**
     * 3357: rrcStateChangeEvent
     */
    [rrcStateChangeEvent_3357URN]: Type.Optional(rrcStateChangeEvent_3357),
    /**
     * 3358: rrcTimerExpiryEvent
     */
    [rrcTimerExpiryEvent_3358URN]: Type.Optional(rrcTimerExpiryEvent_3358),
    /**
     * 3359: cellBlacklistEvent
     */
    [cellBlacklistEvent_3359URN]: Type.Optional(cellBlacklistEvent_3359),
    /**
     * 3360: esmContextInfo
     */
    [esmContextInfo_3360URN]: Type.Optional(esmContextInfo_3360),
    /**
     * 3361: emmStateValue
     */
    [emmStateValue_3361URN]: Type.Optional(emmStateValue_3361),
    /**
     * 3362: nasEmmTimerExpiryEvent
     */
    [nasEmmTimerExpiryEvent_3362URN]: Type.Optional(
      nasEmmTimerExpiryEvent_3362
    ),
    /**
     * 3363: nasEsmExpiryEvent
     */
    [nasEsmExpiryEvent_3363URN]: Type.Optional(nasEsmExpiryEvent_3363),
    /**
     * 3364: emmFailureCauseEvent
     */
    [emmFailureCauseEvent_3364URN]: Type.Optional(emmFailureCauseEvent_3364),
    /**
     * 3365: rachLatency_delay
     */
    [rachLatency_delay_3365URN]: Type.Optional(rachLatency_delay_3365),
    /**
     * 3366: macRachAttemptEvent
     */
    [macRachAttemptEvent_3366URN]: Type.Optional(macRachAttemptEvent_3366),
    /**
     * 3367: macRachAttemptReasonEvent
     */
    [macRachAttemptReasonEvent_3367URN]: Type.Optional(
      macRachAttemptReasonEvent_3367
    ),
    /**
     * 3368: macTimerStatusEvent
     */
    [macTimerStatusEvent_3368URN]: Type.Optional(macTimerStatusEvent_3368),
    /**
     * 3369: macTimingAdvanceEvent
     */
    [macTimingAdvanceEvent_3369URN]: Type.Optional(macTimingAdvanceEvent_3369),
    /**
     * 3370: ServingCellMeasurement
     */
    [ServingCellMeasurement_3370URN]: Type.Optional(
      ServingCellMeasurement_3370
    ),
    /**
     * 3371: NeighborCellMeasurements
     */
    [NeighborCellMeasurements_3371URN]: Type.Optional(
      NeighborCellMeasurements_3371
    ),
    /**
     * 3372: TimingAdvance
     */
    [TimingAdvance_3372URN]: Type.Optional(TimingAdvance_3372),
    /**
     * 3373: txPowerHeadroomEvent
     */
    [txPowerHeadroomEvent_3373URN]: Type.Optional(txPowerHeadroomEvent_3373),
    /**
     * 3374: radioLinkMonitoring
     */
    [radioLinkMonitoring_3374URN]: Type.Optional(radioLinkMonitoring_3374),
    /**
     * 3375: PagingDRX
     */
    [PagingDRX_3375URN]: Type.Optional(PagingDRX_3375),
    /**
     * 3376: txPowerBackOffEvent
     */
    [txPowerBackOffEvent_3376URN]: Type.Optional(txPowerBackOffEvent_3376),
    /**
     * 3377: Message3Report
     */
    [Message3Report_3377URN]: Type.Optional(Message3Report_3377),
    /**
     * 3378: PbchDecodingResults
     */
    [PbchDecodingResults_3378URN]: Type.Optional(PbchDecodingResults_3378),
    /**
     * 3379: pucchPowerControl
     */
    [pucchPowerControl_3379URN]: Type.Optional(pucchPowerControl_3379),
    /**
     * 3380: PrachReport
     */
    [PrachReport_3380URN]: Type.Optional(PrachReport_3380),
    /**
     * 3381: VolteCallEvent
     */
    [VolteCallEvent_3381URN]: Type.Optional(VolteCallEvent_3381),
    /**
     * 3382: SipRegistrationEvent
     */
    [SipRegistrationEvent_3382URN]: Type.Optional(SipRegistrationEvent_3382),
    /**
     * 3383: sipPublishEvent
     */
    [sipPublishEvent_3383URN]: Type.Optional(sipPublishEvent_3383),
    /**
     * 3384: sipSubscriptionEvent
     */
    [sipSubscriptionEvent_3384URN]: Type.Optional(sipSubscriptionEvent_3384),
    /**
     * 3385: volteCallStateChangeEvent
     */
    [volteCallStateChangeEvent_3385URN]: Type.Optional(
      volteCallStateChangeEvent_3385
    ),
    /**
     * 3386: VoLTErtpPacketLoss
     */
    [VoLTErtpPacketLoss_3386URN]: Type.Optional(VoLTErtpPacketLoss_3386),
    /**
     * 3387: oA Basic Control
     */
    [oABasicControl_3387URN]: Type.Optional(oABasicControl_3387),
    /**
     * 3388: oA Device
     */
    [oADevice_3388URN]: Type.Optional(oADevice_3388),
    /**
     * 3389: oA Group
     */
    [oAGroup_3389URN]: Type.Optional(oAGroup_3389),
    /**
     * 3390: oA Logical Colour Light-Point Actuator
     */
    [oALogicalColourLight_PointActuator_3390URN]: Type.Optional(
      oALogicalColourLight_PointActuator_3390
    ),
    /**
     * 3391: oA Logical Colour Temperature Light-Point Actuator
     */
    [oALogicalColourTemperatureLight_PointActuator_3391URN]: Type.Optional(
      oALogicalColourTemperatureLight_PointActuator_3391
    ),
    /**
     * 3392: oA Logical Illuminance Sensor
     */
    [oALogicalIlluminanceSensor_3392URN]: Type.Optional(
      oALogicalIlluminanceSensor_3392
    ),
    /**
     * 3393: oA Logical Light-Point Actuator
     */
    [oALogicalLight_PointActuator_3393URN]: Type.Optional(
      oALogicalLight_PointActuator_3393
    ),
    /**
     * 3394: oA Logical Presence Sensor
     */
    [oALogicalPresenceSensor_3394URN]: Type.Optional(
      oALogicalPresenceSensor_3394
    ),
    /**
     * 3395: oA Logical Push-Button Sensor
     */
    [oALogicalPush_ButtonSensor_3395URN]: Type.Optional(
      oALogicalPush_ButtonSensor_3395
    ),
    /**
     * 3396: oA Physical Colour Light-Point Actuator
     */
    [oAPhysicalColourLight_PointActuator_3396URN]: Type.Optional(
      oAPhysicalColourLight_PointActuator_3396
    ),
    /**
     * 3397: oA Physical Colour Temperature Light-Point Actuator
     */
    [oAPhysicalColourTemperatureLight_PointActuator_3397URN]: Type.Optional(
      oAPhysicalColourTemperatureLight_PointActuator_3397
    ),
    /**
     * 3398: oA Physical Illuminance Sensor
     */
    [oAPhysicalIlluminanceSensor_3398URN]: Type.Optional(
      oAPhysicalIlluminanceSensor_3398
    ),
    /**
     * 3399: oA Physical Light-Point Actuator
     */
    [oAPhysicalLight_PointActuator_3399URN]: Type.Optional(
      oAPhysicalLight_PointActuator_3399
    ),
    /**
     * 3400: oA Physical Presence Sensor
     */
    [oAPhysicalPresenceSensor_3400URN]: Type.Optional(
      oAPhysicalPresenceSensor_3400
    ),
    /**
     * 3401: oA Physical Push-Button Sensor
     */
    [oAPhysicalPush_ButtonSensor_3401URN]: Type.Optional(
      oAPhysicalPush_ButtonSensor_3401
    ),
    /**
     * 3402: oA Receiving Object
     */
    [oAReceivingObject_3402URN]: Type.Optional(oAReceivingObject_3402),
    /**
     * 3403: oA Reporting Object
     */
    [oAReportingObject_3403URN]: Type.Optional(oAReportingObject_3403),
    /**
     * 3404: oA Scene
     */
    [oAScene_3404URN]: Type.Optional(oAScene_3404),
    /**
     * 3405: oA OGC-Security
     */
    [oAOGC_Security_3405URN]: Type.Optional(oAOGC_Security_3405),
    /**
     * 3406: oA Status Report Structure
     */
    [oAStatusReportStructure_3406URN]: Type.Optional(
      oAStatusReportStructure_3406
    ),
    /**
     * 3407: Smoke Alarm
     */
    [SmokeAlarm_3407URN]: Type.Optional(SmokeAlarm_3407),
    /**
     * 3408: Manhole Cover
     */
    [ManholeCover_3408URN]: Type.Optional(ManholeCover_3408),
    /**
     * 3410: Device Extension
     */
    [DeviceExtension_3410URN]: Type.Optional(DeviceExtension_3410),
    /**
     * 3411: Battery
     */
    [Battery_3411URN]: Type.Optional(Battery_3411),
    /**
     * 3412: LPWAN Communication
     */
    [LPWANCommunication_3412URN]: Type.Optional(LPWANCommunication_3412),
    /**
     * 3413: uCIFI Generic Actuator
     */
    [uCIFIGenericActuator_3413URN]: Type.Optional(uCIFIGenericActuator_3413),
    /**
     * 3414: uCIFI data bridge
     */
    [uCIFIdatabridge_3414URN]: Type.Optional(uCIFIdatabridge_3414),
    /**
     * 3415: Time synchronization
     */
    [Timesynchronization_3415URN]: Type.Optional(Timesynchronization_3415),
    /**
     * 3416: Outdoor lamp controller
     */
    [Outdoorlampcontroller_3416URN]: Type.Optional(Outdoorlampcontroller_3416),
    /**
     * 3417: Luminaire asset
     */
    [Luminaireasset_3417URN]: Type.Optional(Luminaireasset_3417),
    /**
     * 3418: Electrical monitor
     */
    [Electricalmonitor_3418URN]: Type.Optional(Electricalmonitor_3418),
    /**
     * 3419: Photocell
     */
    [Photocell_3419URN]: Type.Optional(Photocell_3419),
    /**
     * 3420: LED color light
     */
    [LEDcolorlight_3420URN]: Type.Optional(LEDcolorlight_3420),
    /**
     * 3421: Single-phase electrical meter
     */
    [Single_phaseelectricalmeter_3421URN]: Type.Optional(
      Single_phaseelectricalmeter_3421
    ),
    /**
     * 3423: Gas meter
     */
    [Gasmeter_3423URN]: Type.Optional(Gasmeter_3423),
    /**
     * 3424: Water meter
     */
    [Watermeter_3424URN]: Type.Optional(Watermeter_3424),
    /**
     * 3425: Irrigation valve
     */
    [Irrigationvalve_3425URN]: Type.Optional(Irrigationvalve_3425),
    /**
     * 3426: Water quality sensor
     */
    [Waterqualitysensor_3426URN]: Type.Optional(Waterqualitysensor_3426),
    /**
     * 3427: Pressure monitoring sensor
     */
    [Pressuremonitoringsensor_3427URN]: Type.Optional(
      Pressuremonitoringsensor_3427
    ),
    /**
     * 3428: Air quality
     */
    [Airquality_3428URN]: Type.Optional(Airquality_3428),
    /**
     * 3429: Tilt sensor
     */
    [Tiltsensor_3429URN]: Type.Optional(Tiltsensor_3429),
    /**
     * 3430: Global Navigation Satellite System
     */
    [GlobalNavigationSatelliteSystem_3430URN]: Type.Optional(
      GlobalNavigationSatelliteSystem_3430
    ),
    /**
     * 3431: Parking Sensor
     */
    [ParkingSensor_3431URN]: Type.Optional(ParkingSensor_3431),
    /**
     * 3432: Traffic Counter
     */
    [TrafficCounter_3432URN]: Type.Optional(TrafficCounter_3432),
    /**
     * 3433: Noise sensor
     */
    [Noisesensor_3433URN]: Type.Optional(Noisesensor_3433),
    /**
     * 3434: People counter
     */
    [Peoplecounter_3434URN]: Type.Optional(Peoplecounter_3434),
    /**
     * 3435: Filling level
     */
    [Fillinglevel_3435URN]: Type.Optional(Fillinglevel_3435),
    /**
     * 3436: Edge computing manager
     */
    [Edgecomputingmanager_3436URN]: Type.Optional(Edgecomputingmanager_3436),
    /**
     * 3437: Edge computing script
     */
    [Edgecomputingscript_3437URN]: Type.Optional(Edgecomputingscript_3437),
    /**
     * 3438: Edge computing time condition
     */
    [Edgecomputingtimecondition_3438URN]: Type.Optional(
      Edgecomputingtimecondition_3438
    ),
    /**
     * 3439: Edge computing generic condition
     */
    [Edgecomputinggenericcondition_3439URN]: Type.Optional(
      Edgecomputinggenericcondition_3439
    ),
    /**
     * 3441: LwM2M v1.0 Test Object
     */
    [LwM2Mv1_0TestObject_3441URN]: Type.Optional(LwM2Mv1_0TestObject_3441),
    /**
     * 3442: LwM2M v1.1 Test Object
     */
    [LwM2Mv1_1TestObject_3442URN]: Type.Optional(LwM2Mv1_1TestObject_3442),
    /**
     * 10241: HostDeviceInfo
     */
    [HostDeviceInfo_10241URN]: Type.Optional(HostDeviceInfo_10241),
    /**
     * 10242: 3-Phase Power Meter
     */
    [n3_PhasePowerMeter_10242URN]: Type.Optional(n3_PhasePowerMeter_10242),
    /**
     * 10243: Single-Phase Power Meter
     */
    [Single_PhasePowerMeter_10243URN]: Type.Optional(
      Single_PhasePowerMeter_10243
    ),
    /**
     * 10244: VehicleControlUnit
     */
    [VehicleControlUnit_10244URN]: Type.Optional(VehicleControlUnit_10244),
    /**
     * 10245: Relay Management
     */
    [RelayManagement_10245URN]: Type.Optional(RelayManagement_10245),
    /**
     * 10246: CrowdBox Measurements
     */
    [CrowdBoxMeasurements_10246URN]: Type.Optional(CrowdBoxMeasurements_10246),
    /**
     * 10247: Neighbour Cell Report
     */
    [NeighbourCellReport_10247URN]: Type.Optional(NeighbourCellReport_10247),
    /**
     * 10248: Connected UE Measurements
     */
    [ConnectedUEMeasurements_10248URN]: Type.Optional(
      ConnectedUEMeasurements_10248
    ),
    /**
     * 10249: 	Connected UE Report
     */
    [ConnectedUEReport_10249URN]: Type.Optional(ConnectedUEReport_10249),
    /**
     * 10250: App Data Container
     */
    [AppDataContainer_10250URN]: Type.Optional(AppDataContainer_10250),
    /**
     * 10251: AT Command
     */
    [ATCommand_10251URN]: Type.Optional(ATCommand_10251),
    /**
     * 10252: Manifest
     */
    [Manifest_10252URN]: Type.Optional(Manifest_10252),
    /**
     * 10253: Confidential Data
     */
    [ConfidentialData_10253URN]: Type.Optional(ConfidentialData_10253),
    /**
     * 10254: Current Loop Input
     */
    [CurrentLoopInput_10254URN]: Type.Optional(CurrentLoopInput_10254),
    /**
     * 10255: Device Metadata
     */
    [DeviceMetadata_10255URN]: Type.Optional(DeviceMetadata_10255),
    /**
     * 10256: ECID-Signal Measurement Information
     */
    [ECID_SignalMeasurementInformation_10256URN]: Type.Optional(
      ECID_SignalMeasurementInformation_10256
    ),
    /**
     * 10257: Heat / Cooling meter
     */
    [Heat_Coolingmeter_10257URN]: Type.Optional(Heat_Coolingmeter_10257),
    /**
     * 10258: Current Loop Output
     */
    [CurrentLoopOutput_10258URN]: Type.Optional(CurrentLoopOutput_10258),
    /**
     * 10259: System Log
     */
    [SystemLog_10259URN]: Type.Optional(SystemLog_10259),
    /**
     * 10260: RDB
     */
    [RDB_10260URN]: Type.Optional(RDB_10260),
    /**
     * 10262: Interval Data Delivery
     */
    [IntervalDataDelivery_10262URN]: Type.Optional(IntervalDataDelivery_10262),
    /**
     * 10263: Event Data Delivery
     */
    [EventDataDelivery_10263URN]: Type.Optional(EventDataDelivery_10263),
    /**
     * 10264: Delivery Schedule
     */
    [DeliverySchedule_10264URN]: Type.Optional(DeliverySchedule_10264),
    /**
     * 10265: Leakage Detection Configuration
     */
    [LeakageDetectionConfiguration_10265URN]: Type.Optional(
      LeakageDetectionConfiguration_10265
    ),
    /**
     * 10266: Water Flow Readings
     */
    [WaterFlowReadings_10266URN]: Type.Optional(WaterFlowReadings_10266),
    /**
     * 10267: Daily Maximum Flow Rate Readings
     */
    [DailyMaximumFlowRateReadings_10267URN]: Type.Optional(
      DailyMaximumFlowRateReadings_10267
    ),
    /**
     * 10268: Temperature Readings
     */
    [TemperatureReadings_10268URN]: Type.Optional(TemperatureReadings_10268),
    /**
     * 10269: Pressure Readings
     */
    [PressureReadings_10269URN]: Type.Optional(PressureReadings_10269),
    /**
     * 10270: Battery Level Readings
     */
    [BatteryLevelReadings_10270URN]: Type.Optional(BatteryLevelReadings_10270),
    /**
     * 10271: Communications Activity Time Readings
     */
    [CommunicationsActivityTimeReadings_10271URN]: Type.Optional(
      CommunicationsActivityTimeReadings_10271
    ),
    /**
     * 10272: Water Meter Customer Leakage Alarm
     */
    [WaterMeterCustomerLeakageAlarm_10272URN]: Type.Optional(
      WaterMeterCustomerLeakageAlarm_10272
    ),
    /**
     * 10273: Water Meter Reverse Flow Alarm
     */
    [WaterMeterReverseFlowAlarm_10273URN]: Type.Optional(
      WaterMeterReverseFlowAlarm_10273
    ),
    /**
     * 10274: Water Meter Empty Pipe Alarm
     */
    [WaterMeterEmptyPipeAlarm_10274URN]: Type.Optional(
      WaterMeterEmptyPipeAlarm_10274
    ),
    /**
     * 10275: Water Meter Tamper Alarm
     */
    [WaterMeterTamperAlarm_10275URN]: Type.Optional(
      WaterMeterTamperAlarm_10275
    ),
    /**
     * 10276: Water Meter High Pressure Alarm
     */
    [WaterMeterHighPressureAlarm_10276URN]: Type.Optional(
      WaterMeterHighPressureAlarm_10276
    ),
    /**
     * 10277: Water Meter Low Pressure Alarm
     */
    [WaterMeterLowPressureAlarm_10277URN]: Type.Optional(
      WaterMeterLowPressureAlarm_10277
    ),
    /**
     * 10278: High Temperature Alarm
     */
    [HighTemperatureAlarm_10278URN]: Type.Optional(HighTemperatureAlarm_10278),
    /**
     * 10279: Low Temperature Alarm
     */
    [LowTemperatureAlarm_10279URN]: Type.Optional(LowTemperatureAlarm_10279),
    /**
     * 10280: Water Network Leak Alarm
     */
    [WaterNetworkLeakAlarm_10280URN]: Type.Optional(
      WaterNetworkLeakAlarm_10280
    ),
    /**
     * 10281: Low Battery Alarm
     */
    [LowBatteryAlarm_10281URN]: Type.Optional(LowBatteryAlarm_10281),
    /**
     * 10282: Daughter Board Failure Alarm
     */
    [DaughterBoardFailureAlarm_10282URN]: Type.Optional(
      DaughterBoardFailureAlarm_10282
    ),
    /**
     * 10283: Device Reboot Event
     */
    [DeviceRebootEvent_10283URN]: Type.Optional(DeviceRebootEvent_10283),
    /**
     * 10284: Time Synchronisation Event
     */
    [TimeSynchronisationEvent_10284URN]: Type.Optional(
      TimeSynchronisationEvent_10284
    ),
    /**
     * 10286: App Fota Container
     */
    [AppFotaContainer_10286URN]: Type.Optional(AppFotaContainer_10286),
    /**
     * 10290: Voltage Logging
     */
    [VoltageLogging_10290URN]: Type.Optional(VoltageLogging_10290),
    /**
     * 10291: Voltage Transient
     */
    [VoltageTransient_10291URN]: Type.Optional(VoltageTransient_10291),
    /**
     * 10292: Pressure Transient
     */
    [PressureTransient_10292URN]: Type.Optional(PressureTransient_10292),
    /**
     * 10299: HostDevice
     */
    [HostDevice_10299URN]: Type.Optional(HostDevice_10299),
    /**
     * 10300: LWM2M Meta Object
     */
    [LWM2MMetaObject_10300URN]: Type.Optional(LWM2MMetaObject_10300),
    /**
     * 10308: AT&T Connectivity Extension
     */
    [ATandTConnectivityExtension_10308URN]: Type.Optional(
      ATandTConnectivityExtension_10308
    ),
    /**
     * 10309: Shareparkinglot
     */
    [Shareparkinglot_10309URN]: Type.Optional(Shareparkinglot_10309),
    /**
     * 10311: Solar Radiation
     */
    [SolarRadiation_10311URN]: Type.Optional(SolarRadiation_10311),
    /**
     * 10313: Gas Readings
     */
    [GasReadings_10313URN]: Type.Optional(GasReadings_10313),
    /**
     * 10314: Particulates
     */
    [Particulates_10314URN]: Type.Optional(Particulates_10314),
    /**
     * 10315: Robot
     */
    [Robot_10315URN]: Type.Optional(Robot_10315),
    /**
     * 10316: RCU
     */
    [RCU_10316URN]: Type.Optional(RCU_10316),
    /**
     * 10318: RCU PM
     */
    [RCUPM_10318URN]: Type.Optional(RCUPM_10318),
    /**
     * 10319: RCU Control
     */
    [RCUControl_10319URN]: Type.Optional(RCUControl_10319),
    /**
     * 10320: CCU
     */
    [CCU_10320URN]: Type.Optional(CCU_10320),
    /**
     * 10322: CCU PM
     */
    [CCUPM_10322URN]: Type.Optional(CCUPM_10322),
    /**
     * 10323: CCU Control
     */
    [CCUControl_10323URN]: Type.Optional(CCUControl_10323),
    /**
     * 10324: ECU
     */
    [ECU_10324URN]: Type.Optional(ECU_10324),
    /**
     * 10326: Robot PM
     */
    [RobotPM_10326URN]: Type.Optional(RobotPM_10326),
    /**
     * 10327: Compressor
     */
    [Compressor_10327URN]: Type.Optional(Compressor_10327),
    /**
     * 10328: SCA PM
     */
    [SCAPM_10328URN]: Type.Optional(SCAPM_10328),
    /**
     * 10329: Robot Control
     */
    [RobotControl_10329URN]: Type.Optional(RobotControl_10329),
    /**
     * 10330: Network Info
     */
    [NetworkInfo_10330URN]: Type.Optional(NetworkInfo_10330),
    /**
     * 10331: Robot Service Info
     */
    [RobotServiceInfo_10331URN]: Type.Optional(RobotServiceInfo_10331),
    /**
     * 10332: Robot Selfcheck Info
     */
    [RobotSelfcheckInfo_10332URN]: Type.Optional(RobotSelfcheckInfo_10332),
    /**
     * 10333: PM Threshold
     */
    [PMThreshold_10333URN]: Type.Optional(PMThreshold_10333),
    /**
     * 10334: Robot Alarm
     */
    [RobotAlarm_10334URN]: Type.Optional(RobotAlarm_10334),
    /**
     * 10335: Event
     */
    [Event_10335URN]: Type.Optional(Event_10335),
    /**
     * 10336: MIC
     */
    [MIC_10336URN]: Type.Optional(MIC_10336),
    /**
     * 10337: SCA
     */
    [SCA_10337URN]: Type.Optional(SCA_10337),
    /**
     * 10338: Speaker
     */
    [Speaker_10338URN]: Type.Optional(Speaker_10338),
    /**
     * 10339: Tripod Head
     */
    [TripodHead_10339URN]: Type.Optional(TripodHead_10339),
    /**
     * 10340: Camera
     */
    [Camera_10340URN]: Type.Optional(Camera_10340),
    /**
     * 10341: GPS
     */
    [GPS_10341URN]: Type.Optional(GPS_10341),
    /**
     * 10342: IMU
     */
    [IMU_10342URN]: Type.Optional(IMU_10342),
    /**
     * 10343: LiDAR
     */
    [LiDAR_10343URN]: Type.Optional(LiDAR_10343),
    /**
     * 10344: Arm
     */
    [Arm_10344URN]: Type.Optional(Arm_10344),
    /**
     * 10345: Leg
     */
    [Leg_10345URN]: Type.Optional(Leg_10345),
    /**
     * 10346: Servomotor
     */
    [Servomotor_10346URN]: Type.Optional(Servomotor_10346),
    /**
     * 10347: Screen
     */
    [Screen_10347URN]: Type.Optional(Screen_10347),
    /**
     * 10348: Wheel
     */
    [Wheel_10348URN]: Type.Optional(Wheel_10348),
    /**
     * 10349: Chassis
     */
    [Chassis_10349URN]: Type.Optional(Chassis_10349),
    /**
     * 10350: Light
     */
    [Light_10350URN]: Type.Optional(Light_10350),
    /**
     * 10351: Door
     */
    [Door_10351URN]: Type.Optional(Door_10351),
    /**
     * 10352: Thermal Imager
     */
    [ThermalImager_10352URN]: Type.Optional(ThermalImager_10352),
    /**
     * 10353: Warning Light
     */
    [WarningLight_10353URN]: Type.Optional(WarningLight_10353),
    /**
     * 10354: APP
     */
    [APP_10354URN]: Type.Optional(APP_10354),
    /**
     * 10355: General Info
     */
    [GeneralInfo_10355URN]: Type.Optional(GeneralInfo_10355),
    /**
     * 10356: Service Info
     */
    [ServiceInfo_10356URN]: Type.Optional(ServiceInfo_10356),
    /**
     * 10357: PM
     */
    [PM_10357URN]: Type.Optional(PM_10357),
    /**
     * 10358: Fan PM
     */
    [FanPM_10358URN]: Type.Optional(FanPM_10358),
    /**
     * 10359: Lock
     */
    [Lock_10359URN]: Type.Optional(Lock_10359),
    /**
     * 10360: Ultrasonic Sensor
     */
    [UltrasonicSensor_10360URN]: Type.Optional(UltrasonicSensor_10360),
    /**
     * 10361: Collision Sensor
     */
    [CollisionSensor_10361URN]: Type.Optional(CollisionSensor_10361),
    /**
     * 10362: Drop Sensor
     */
    [DropSensor_10362URN]: Type.Optional(DropSensor_10362),
    /**
     * 10363: Temperature Sensor
     */
    [TemperatureSensor_10363URN]: Type.Optional(TemperatureSensor_10363),
    /**
     * 10364: Humidity Sensor
     */
    [HumiditySensor_10364URN]: Type.Optional(HumiditySensor_10364),
    /**
     * 10365: Gas-Dust Sensor
     */
    [Gas_DustSensor_10365URN]: Type.Optional(Gas_DustSensor_10365),
    /**
     * 10366: Fan
     */
    [Fan_10366URN]: Type.Optional(Fan_10366),
    /**
     * 10368: SpringMotor
     */
    [SpringMotor_10368URN]: Type.Optional(SpringMotor_10368),
    /**
     * 10369: MCU
     */
    [MCU_10369URN]: Type.Optional(MCU_10369),
    /**
     * 10371: Reboot Status
     */
    [RebootStatus_10371URN]: Type.Optional(RebootStatus_10371),
    /**
     * 10374: Modbus Connection
     */
    [ModbusConnection_10374URN]: Type.Optional(ModbusConnection_10374),
    /**
     * 10375: Modbus Register Cluster
     */
    [ModbusRegisterCluster_10375URN]: Type.Optional(
      ModbusRegisterCluster_10375
    ),
    /**
     * 10376: Periodic Activity
     */
    [PeriodicActivity_10376URN]: Type.Optional(PeriodicActivity_10376),
    /**
     * 10377: Data Monitoring
     */
    [DataMonitoring_10377URN]: Type.Optional(DataMonitoring_10377),
    /**
     * 10378: Edge Application Server Configuration
     */
    [EdgeApplicationServerConfiguration_10378URN]: Type.Optional(
      EdgeApplicationServerConfiguration_10378
    ),
    /**
     * 18830: MQTT Broker
     */
    [MQTTBroker_18830URN]: Type.Optional(MQTTBroker_18830),
    /**
     * 18831: MQTT Publication
     */
    [MQTTPublication_18831URN]: Type.Optional(MQTTPublication_18831),
  },
  {
    description:
      "Defines a type that can be used to validate JSON documents that encode LwM2M object data.",
  }
);

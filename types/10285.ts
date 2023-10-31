/**
 * Presence Alarm
 *
 * Where supported by the device this is an alarm that should be raised if the
 * device detects presence above a pre-configured threshold.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10285.xml
 *
 * ID: 10285
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type PresenceAlarm_10285 = Readonly<
	Array<{
		'6011': EventType_6011
		'6012': AlarmRealtime_6012
		'6021': LatestRecordedEventTime_6021
		'6024': EventCode_6024
		'6025': LatestPayload_6025
		'5501'?: DigitalInputCounter_5501
		'5750'?: ApplicationType_5750
		'5751'?: SensorType_5751
		'5903'?: BusytoCleardelay_5903
		'5904'?: CleartoBusydelay_5904
		'6013'?: AlarmState_6013
		'6014'?: AlarmSetThreshold_6014
		'6015'?: AlarmSetOperator_6015
		'6016'?: AlarmClearThreshold_6016
		'6017'?: AlarmClearOperator_6017
		'6018'?: AlarmMaximumEventCount_6018
		'6019'?: AlarmMaximumEventPeriod_6019
		'6020'?: LatestDeliveredEventTime_6020
		'6023'?: AlarmAutoClear_6023
		'6040'?: SampleFrequency_6040
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6057'?: AveragingTimePeriod_6057
	}>
>
/**
 * Event Type
 *
 * Event Type is a readable and writable resource used to represent how this
 * event will behave. Event Type should be one of the following values:-
 * 0. Disabled
 * 1. Alarm Current State
 * 2. Alarm State Change Log
 * 3. Event Log
 *
 * When the Event Type is set to Disabled (0), this event will not be recorded
 * by the device. No Latest Eventlog payload should be delivered for events that
 * are Disabled.
 * When the Event Type is set to Alarm Current State (1), this Event is treated
 * as an alarm state manager and the Latest Eventlog Payload will only contain
 * the current state of this alarm.
 * When the Event Type is set to Alarm State Change Log (2), the Event is
 * treated as an alarm that reports whenever the Alarm is either set or cleared.
 * The Latest Eventlog Payload will contain all alarm transitions since the
 * previous delivery in this mode.
 * When the Event Type is set to Event Log (3), this object instance is treated
 * as a raw event log. It is used to manage and deliver events. The Latest
 * Eventlog Payload will contain all events since the previous delivery in this
 * mode.
 *
 * See the Event Log Payload for examples of each of these modes.
 *
 *
 * ID: 6011
 * MultipleInstances: false
 * Mandatory: true
 */
type EventType_6011 = number
/**
 * Alarm Realtime
 *
 * Realtime is a readable and writable resource used to indicate if an event
 * should report immediately (1) at the point of occurrence, or delivered
 * periodically as part of the Latest Eventlog Payload.
 *
 * ID: 6012
 * MultipleInstances: false
 * Mandatory: true
 */
type AlarmRealtime_6012 = boolean
/**
 * Latest Recorded Event Time
 *
 * Latest Recorded Event Time is a readonly resource used to represent the last
 * recorded event time for this object instance on the device
 *
 * ID: 6021
 * MultipleInstances: false
 * Mandatory: true
 */
type LatestRecordedEventTime_6021 = number
/**
 * Event Code
 *
 * Event Code is a read-only resource used as an identifier to represent this
 * class of event. The allocation of event codes is implementation specific but
 * ideally be unique across the implementation. Event Codes use vendor specific
 * LogClass value 100...255
 *
 * ID: 6024
 * MultipleInstances: false
 * Mandatory: true
 */
type EventCode_6024 = number
/**
 * Latest Payload
 *
 * The Latest Eventlog Payload resource is a read-only serialised Opaque
 * (Binary) representation of all the Event Data between the Last Delivered
 * Event Time and the Latest Recorded Event Time. When this payload is delivered
 * to the LwM2M server, via either a read request or a confirmed observation on
 * this Object, Object Instance or Resource, the Latest Delivered Interval
 * should be updated. When no new data exists, an empty Opaque value should be
 * provided. The payload data can be provided in an implementation specific
 * serialisation, but by default for fixed length values should use the
 * OMA-LwM2M CBOR format encoded with one of these schemes:- Event Type = Alarm
 * Current State (1) In this mode, only the current alarm state should be
 * reported 1. 8-bit integer, value 2 representing OMA-LwM2M CBOR format. 2.
 * Event Code [16-bit integer] 3. Event Type [8-bit Integer] - Alarm Current
 * State (1) 4. Alarm Timestamp [32-bit unsigned integer] representing the
 * number of seconds since Jan 1st, 1970 in the UTC time zone. 5. Alarm State
 * [8-bit Integer]
 *
 * ID: 6025
 * MultipleInstances: false
 * Mandatory: true
 */
type LatestPayload_6025 = string
/**
 * Digital Input Counter
 *
 * The cumulative value of active state detected.
 *
 * ID: 5501
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalInputCounter_5501 = number
/**
 * Application Type
 *
 * The application type of the sensor or actuator as a string depending on the
 * use case.
 *
 * ID: 5750
 * MultipleInstances: false
 * Mandatory: false
 */
type ApplicationType_5750 = string
/**
 * Sensor Type
 *
 * The type of the sensor (for instance PIR type).
 *
 * ID: 5751
 * MultipleInstances: false
 * Mandatory: false
 */
type SensorType_5751 = string
/**
 * Busy to Clear delay
 *
 * Delay from the detection state to the clear state in ms.
 *
 * ID: 5903
 * MultipleInstances: false
 * Mandatory: false
 * Units: ms
 */
type BusytoCleardelay_5903 = number
/**
 * Clear to Busy delay
 *
 * Delay from the clear state to the busy state in ms.
 *
 * ID: 5904
 * MultipleInstances: false
 * Mandatory: false
 * Units: ms
 */
type CleartoBusydelay_5904 = number
/**
 * Alarm State
 *
 * Alarm State is a read-only resource used to indicate the current alarm state
 * for this Event configuration. This is only applicable if the Event Type is
 * Alarm Current State (1) or Alarm State Change (2).
 *
 * ID: 6013
 * MultipleInstances: false
 * Mandatory: false
 */
type AlarmState_6013 = boolean
/**
 * Alarm Set Threshold
 *
 * Set Threshold is a readable and writable resource used to represent the
 * threshold for when an alarm is triggered. This resource is used in
 * conjunction with the Set Operator resource.
 *
 * ID: 6014
 * MultipleInstances: false
 * Mandatory: false
 */
type AlarmSetThreshold_6014 = number
/**
 * Alarm Set Operator
 *
 * Set Operator is a readable and writable resource used in conjunction with the
 * Set Threshold to represent when an alarm is triggered. This resource should
 * be set to one of the following values:-
 * 0. Greater Than or Equal to
 * 1. Less Than or Equal to
 * By setting the Set Operator to Greater Than (0), when the measured value for
 * this event exceeds the Set Threshold resource, the event is considered to be
 * in an Alarm State of 1
 * By setting the Set Operator to Less Than (1), when the measured value for
 * this event falls below the Set Threshold resource, the event is considered to
 * be in an Alarm State of 1
 *
 * ID: 6015
 * MultipleInstances: false
 * Mandatory: false
 */
type AlarmSetOperator_6015 = number
/**
 * Alarm Clear Threshold
 *
 * Clear Threshold is a readable and writable resource used to represent the
 * threshold for when an alarm is cleared. This resource is used in conjunction
 * with the Clear Operator resource.
 *
 * ID: 6016
 * MultipleInstances: false
 * Mandatory: false
 */
type AlarmClearThreshold_6016 = number
/**
 * Alarm Clear Operator
 *
 * Clear Operator is a readable and writable resource used in conjunction with
 * the Clear Threshold to represent when an alarm is Cleared. This resource
 * should be set to one of the following values:-
 * 0. Greater Than or Equal to
 * 1. Less Than or Equal to
 * By setting the Clear Operator to Greater Than (0), when the measured value
 * for this event exceeds the Clear Threshold resource, the event is considered
 * to be in an Alarm State of 0
 * By setting the Clear Operator to Less Than (1), when the measured value for
 * this event falls below the Clear Threshold resource, the event is considered
 * to be in an Alarm State of 0
 *
 * ID: 6017
 * MultipleInstances: false
 * Mandatory: false
 */
type AlarmClearOperator_6017 = number
/**
 * Alarm Maximum Event Count
 *
 * Maximum Event Count is a readable and writable resource used provide a
 * ceiling on the number of events that can be raised within the time period
 * defined in Maximum Event Period resource. If no Maximum Event Count is set,
 * the number of events recorded is unconstrained. The intent of this resource
 * is to control the number of events reported, particularly in the case of a
 * faulty sensor.
 *
 * ID: 6018
 * MultipleInstances: false
 * Mandatory: false
 */
type AlarmMaximumEventCount_6018 = number
/**
 * Alarm Maximum Event Period
 *
 * Maximum Event Period is a readable and writable resource used in conjunction
 * with the Maximum Event Count resource to control the number of events that
 * can be raised in a given period. Maximum Event Period is an integer value
 * representing the number of seconds for which the Maximum Event Count is
 * measured. If no Maximum Event Period is set, the number of events recorded is
 * unconstrained. The intent of this resource is to control the number of events
 * reported, particularly in the case of a faulty sensor.
 *
 * ID: 6019
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type AlarmMaximumEventPeriod_6019 = number
/**
 * Latest Delivered Event Time
 *
 * Latest Delivered Event Time is a readable and writable resource to represent
 * the last recorded time that an event was delivered for this event code to the
 * LwM2M server. The setting of this resource is implementation specific but
 * should be updated based on, either a Read request of the Latest Eventlog
 * Payload from the LwM2M server or via a confirmed delivery of Notify operation
 * of the Latest Eventlog Payload resource. This resource is writable to allow
 * the server to adjust the Last Delivered Event Time value if the server and
 * client is out of sync.
 *
 * ID: 6020
 * MultipleInstances: false
 * Mandatory: false
 */
type LatestDeliveredEventTime_6020 = number
/**
 * Alarm Auto Clear
 *
 * Auto Clear Alarm is a readable and writable resource used to indicate if an
 * alarm is automatically cleared once the delivery of the event data payload is
 * complete
 *
 * ID: 6023
 * MultipleInstances: false
 * Mandatory: false
 */
type AlarmAutoClear_6023 = boolean
/**
 * Sample Frequency
 *
 * How often the inputs are read/sampled.This value can be changed by doing a
 * write command
 *
 * ID: 6040
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type SampleFrequency_6040 = number
/**
 * Measurement Quality Indicator
 *
 * Measurement quality indicator reported by a smart sensor. 0: UNCHECKED No
 * quality checks were done because they do not exist or can not be applied. 1:
 * REJECTED WITH CERTAINTY The measured value is invalid. 2: REJECTED WITH
 * PROBABILITY The measured value is likely invalid. 3: ACCEPTED BUT SUSPICIOUS
 * The measured value is likely OK. 4: ACCEPTED The measured value is OK. 5-15:
 * Reserved for future extensions. 16-23: Vendor specific measurement quality.
 *
 * ID: 6042
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityIndicator_6042 = number
/**
 * Measurement Quality Level
 *
 * Measurement quality level reported by a smart sensor. Quality level 100 means
 * that the measurement has fully passed quality check algorithms. Smaller
 * quality levels mean that quality has decreased and the measurement has only
 * partially passed quality check algorithms. The smaller the quality level, the
 * more caution should be used by the application when using the measurement.
 * When the quality level is 0 it means that the measurement should certainly be
 * rejected.
 *
 * ID: 6049
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityLevel_6049 = number
/**
 * Averaging Time Period
 *
 * A value used to specify the time period over which data should be
 * averaged.This value can be changed by doing a write command
 *
 * ID: 6057
 * MultipleInstances: true
 * Mandatory: false
 * Units: s
 */
type AveragingTimePeriod_6057 = Array<number>
/**
 * The objectURN for Presence Alarm
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10285'

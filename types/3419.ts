/**
 * Photocell
 *
 * A uCIFI photocell object is used for lighting control, particularly to
 * identify when light should be switched ON/OFF.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3419.xml
 *
 * ID: 3419
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Photocell_3419 = Readonly<
	Array<{
		'1'?: ONluxlevel_1
		'2'?: OFFluxlevel_2
		'3'?: Photocellstatus_3
	}>
>
/**
 * ON lux level
 *
 * Lux level below which the photocell switches its relay ON or sends a switch
 * ON message on the network.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 * Units: lx
 */
type ONluxlevel_1 = number
/**
 * OFF lux level
 *
 * Lux level above which the photocell switches its relay OFF or sends a switch
 * OFF message on the network.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: lx
 */
type OFFluxlevel_2 = number
/**
 * Photocell status
 *
 * Set to True if lux level is below ON lux level. Set to False if lux level is
 * above OFF lux.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Photocellstatus_3 = boolean
/**
 * The objectURN for Photocell
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3419'

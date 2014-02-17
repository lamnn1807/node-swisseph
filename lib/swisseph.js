var swisseph = require (__dirname + '/../build/Release/swisseph.node');

// Calendar types
swisseph.JUL_CAL = 0;
swisseph.GREG_CAL = 1;

// Planet numbers
swisseph.ECL_NUT = -1;

swisseph.SUN = 0;

// Base planets
swisseph.MOON = 1;
swisseph.MERCURY = 2;
swisseph.VENUS = 3;
swisseph.EARTH = 14;
swisseph.MARS = 4;
swisseph.JUPITER = 5;
swisseph.SATURN = 6;
swisseph.URANUS = 7;
swisseph.NEPTUNE = 8;
swisseph.PLUTO = 9;

// Moon nodes
swisseph.MEAN_NODE = 10;
swisseph.TRUE_NODE = 11;
swisseph.MEAN_APOG = 12;
swisseph.OSCU_APOG = 13;
swisseph.INTP_APOG = 21;
swisseph.INTP_PERG = 22;

// Base asteroids
swisseph.CHIRON = 15;
swisseph.PHOLUS = 16;
swisseph.CERES = 17;
swisseph.PALLAS = 18;
swisseph.JUNO = 19;
swisseph.VESTA = 20;

swisseph.NPLANETS = 23;

swisseph.AST_OFFSET = 10000;
swisseph.VARUNA = (swisseph.AST_OFFSET + 20000);

swisseph.FICT_OFFSET = 40;
swisseph.FICT_OFFSET_1 = 39;
swisseph.FICT_MAX = 999;
swisseph.NFICT_ELEM = 15;

swisseph.COMET_OFFSET = 1000;

swisseph.NALL_NAT_POINTS = (swisseph.NPLANETS + swisseph.NFICT_ELEM);

// Hamburger or Uranian "planets"
swisseph.CUPIDO = 40;
swisseph.HADES = 41;
swisseph.ZEUS = 42;
swisseph.KRONOS = 43;
swisseph.APOLLON = 44;
swisseph.ADMETOS = 45;
swisseph.VULKANUS = 46;
swisseph.POSEIDON = 47;

// Other fictitious bodies
swisseph.ISIS = 48;
swisseph.NIBIRU = 49;
swisseph.HARRINGTON = 50;
swisseph.NEPTUNE_LEVERRIER = 51;
swisseph.NEPTUNE_ADAMS = 52;
swisseph.PLUTO_LOWELL = 53;
swisseph.PLUTO_PICKERING = 54;
swisseph.VULCAN = 55;
swisseph.WHITE_MOON = 56;
swisseph.PROSERPINA = 57;
swisseph.WALDEMATH = 58;

swisseph.FIXSTAR = -10;

swisseph.ASC = 0;
swisseph.MC = 1;
swisseph.ARMC = 2;
swisseph.VERTEX = 3;
swisseph.EQUASC = 4; // "equatorial ascendant"
swisseph.COASC1 = 5;	// "co-ascendant" (W. Koch)
swisseph.COASC2 = 6;	// "co-ascendant" (M. Munkasey)
swisseph.POLASC = 7;	// "polar ascendant" (M. Munkasey)
swisseph.NASCMC = 8;

/**
 * flag bits for parameter iflag in function swe_calc ()
 * The flag bits are defined in such a way that iflag = 0 delivers what one
 * usually wants:
 *  - the default ephemeris (SWISS EPHEMERIS) is used,
 *  - apparent geocentric positions referring to the true equinox of date
 *    are returned.
 * If not only coordinates, but also speed values are required, use
 * flag = FLG_SPEED.
 *
 * The 'L' behind the number indicates that 32-bit integers (Long) are used.
 */
swisseph.FLG_JPLEPH = 1; // use JPL ephemeris
swisseph.FLG_SWIEPH = 2; // use SWISSEPH ephemeris
swisseph.FLG_MOSEPH = 4; // use Moshier ephemeris

swisseph.FLG_HELCTR = 8; // return heliocentric position
swisseph.FLG_TRUEPOS = 16; // return true positions, not apparent
swisseph.FLG_J2000 = 32; // no precession, i.e. give J2000 equinox
swisseph.FLG_NONUT = 64; // no nutation, i.e. mean equinox of date
swisseph.FLG_SPEED3 = 128; // speed from 3 positions (do not use it, FLG_SPEED is faster and more precise.)
swisseph.FLG_SPEED = 256; // high precision speed
swisseph.FLG_NOGDEFL = 512; // turn off gravitational deflection
swisseph.FLG_NOABERR = 1024; // turn off 'annual' aberration of light
swisseph.FLG_EQUATORIAL = (2  *1024); // equatorial positions are wanted
swisseph.FLG_XYZ = (4 * 1024); // cartesian, not polar, coordinates
swisseph.FLG_RADIANS = (8 * 1024); // coordinates in radians, not degrees
swisseph.FLG_BARYCTR = (16 * 1024); // barycentric positions
swisseph.FLG_TOPOCTR = (32 * 1024); // topocentric positions
swisseph.FLG_SIDEREAL = (64 * 1024); // sidereal positions
swisseph.FLG_ICRS = (128 * 1024); // ICRS (DE406 reference frame)

swisseph.SIDBITS = 256;
swisseph.SIDBIT_ECL_T0 = 256; // for projection onto ecliptic of t0
swisseph.SIDBIT_SSY_PLANE = 512; // for projection onto solar system plane

// Sidereal modes (ayanamsas)
swisseph.SIDM_FAGAN_BRADLEY = 0;
swisseph.SIDM_LAHIRI = 1;
swisseph.SIDM_DELUCE = 2;
swisseph.SIDM_RAMAN = 3;
swisseph.SIDM_USHASHASHI = 4;
swisseph.SIDM_KRISHNAMURTI = 5;
swisseph.SIDM_DJWHAL_KHUL = 6;
swisseph.SIDM_YUKTESHWAR = 7;
swisseph.SIDM_JN_BHASIN = 8;
swisseph.SIDM_BABYL_KUGLER1 = 9;
swisseph.SIDM_BABYL_KUGLER2 = 10;
swisseph.SIDM_BABYL_KUGLER3 = 11;
swisseph.SIDM_BABYL_HUBER = 12;
swisseph.SIDM_BABYL_ETPSC = 13;
swisseph.SIDM_ALDEBARAN_15TAU = 14;
swisseph.SIDM_HIPPARCHOS = 15;
swisseph.SIDM_SASSANIAN = 16;
swisseph.SIDM_GALCENT_0SAG = 17;
swisseph.SIDM_J2000 = 18;
swisseph.SIDM_J1900 = 19;
swisseph.SIDM_B1950 = 20;
swisseph.SIDM_USER = 255;

swisseph.NSIDM_PREDEF = 21;

// used for swe_nod_aps ()
swisseph.NODBIT_MEAN = 1; // mean nodes/apsides
swisseph.NODBIT_OSCU = 2; // osculating nodes/apsides
swisseph.NODBIT_OSCU_BAR = 4; // same, but motion about solar system barycenter is considered
swisseph.NODBIT_FOPOINT = 256; // focal point of orbit instead of aphelion

// default ephemeris used when no ephemeris flagbit is set
swisseph.FLG_DEFAULTEPH = swisseph.FLG_SWIEPH;

// Maximum size of fixstar name.
// The parameter star in swe_fixstar () must allow twice this space for
// the returned star name.
swisseph.MAX_STNAME = 256;

// defines for eclipse computations
swisseph.ECL_CENTRAL = 1;
swisseph.ECL_NONCENTRAL = 2;
swisseph.ECL_TOTAL = 4;
swisseph.ECL_ANNULAR = 8;
swisseph.ECL_PARTIAL = 16;
swisseph.ECL_ANNULAR_TOTAL = 32;
swisseph.ECL_PENUMBRAL = 64;
swisseph.ECL_ALLTYPES_SOLAR = (
	swisseph.ECL_CENTRAL |
	swisseph.ECL_NONCENTRAL |
	swisseph.ECL_TOTAL |
	swisseph.ECL_ANNULAR |
	swisseph.ECL_PARTIAL |
	swisseph.ECL_ANNULAR_TOTAL
);
swisseph.ECL_ALLTYPES_LUNAR = (
	swisseph.ECL_TOTAL |
	swisseph.ECL_PARTIAL |
	swisseph.ECL_PENUMBRAL
);
swisseph.ECL_VISIBLE = 128;
swisseph.ECL_MAX_VISIBLE = 256;
swisseph.ECL_1ST_VISIBLE = 512;
swisseph.ECL_2ND_VISIBLE = 1024;
swisseph.ECL_3RD_VISIBLE = 2048;
swisseph.ECL_4TH_VISIBLE = 4096;
// check if the next conjunction of the moon with a planet is an occultation; don't search further
swisseph.ECL_ONE_TRY = (32 * 1024);

// for swe_ritransit()
swisseph.CALC_RISE = 1;
swisseph.CALC_SET = 2;
swisseph.CALC_MTRANSIT = 4;
swisseph.CALC_ITRANSIT = 8;
// to be or'ed to CALC_RISE/SET, if rise or set of disc center is required
swisseph.BIT_DISC_CENTER = 256;
// to be or'ed to CALC_RISE/SET, if rise or set of lower limb of disc is requried
swisseph.BIT_DISC_BOTTOM = 8192;
// to be or'ed to CALC_RISE/SET, if refraction is to be ignored
swisseph.BIT_NO_REFRACTION = 512;
swisseph.BIT_CIVIL_TWILIGHT = 1024; // to be or'ed to CALC_RISE/SET
swisseph.BIT_NAUTIC_TWILIGHT = 2048; // to be or'ed to CALC_RISE/SET
swisseph.BIT_ASTRO_TWILIGHT = 4096; // to be or'ed to CALC_RISE/SET
// or'ed to CALC_RISE/SET: neglect the effect of distance on disc size
swisseph.BIT_FIXED_DISC_SIZE = (16 * 1024);

// for swe_azalt () and swe_azalt_rev ()
swisseph.ECL2HOR = 0;
swisseph.EQU2HOR = 1;
swisseph.HOR2ECL = 0;
swisseph.HOR2EQU = 1;

// for swe_refrac ()
swisseph.TRUE_TO_APP = 0;
swisseph.APP_TO_TRUE = 1;

// defines for function swe_split_deg () (in swephlib.c)
swisseph.SPLIT_DEG_ROUND_SEC = 1;
swisseph.SPLIT_DEG_ROUND_MIN = 2;
swisseph.SPLIT_DEG_ROUND_DEG = 4;
swisseph.SPLIT_DEG_ZODIACAL = 8;
// don't round to next sign, e.g. 29.9999999 will be rounded to 29d59'59" (or 29d59' or 29d)
swisseph.SPLIT_DEG_KEEP_SIGN = 16;
// don't round to next degree e.g. 13.9999999 will be rounded to 13d59'59" (or 13d59' or 13d)
swisseph.SPLIT_DEG_KEEP_DEG = 32;

// for heliacal functions
swisseph.HELIACAL_RISING = 1;
swisseph.HELIACAL_SETTING = 2;
swisseph.MORNING_FIRST = swisseph.HELIACAL_RISING;
swisseph.EVENING_LAST = swisseph.HELIACAL_SETTING;
swisseph.EVENING_FIRST = 3;
swisseph.MORNING_LAST = 4;
swisseph.ACRONYCHAL_RISING = 5; // still not implemented
swisseph.ACRONYCHAL_SETTING = 6; // still not implemented
swisseph.COSMICAL_SETTING = swisseph.ACRONYCHAL_SETTING;

swisseph.HELFLAG_LONG_SEARCH = 128;
swisseph.HELFLAG_HIGH_PRECISION = 256;
swisseph.HELFLAG_OPTICAL_PARAMS = 512;
swisseph.HELFLAG_NO_DETAILS = 1024;
swisseph.HELFLAG_SEARCH_1_PERIOD = (1 << 11);
swisseph.HELFLAG_VISLIM_DARK = (1 << 12);
swisseph.HELFLAG_VISLIM_NOMOON = (1 << 13);
swisseph.HELFLAG_VISLIM_PHOTOPIC = (1 << 14);
swisseph.HELFLAG_AVKIND_VR = (1 << 15);
swisseph.HELFLAG_AVKIND_PTO = (1 << 16);
swisseph.HELFLAG_AVKIND_MIN7 = (1 << 17);
swisseph.HELFLAG_AVKIND_MIN9 = (1 << 18);
swisseph.HELFLAG_AVKIND = (
	swisseph.HELFLAG_AVKIND_VR |
	swisseph.HELFLAG_AVKIND_PTO |
	swisseph.HELFLAG_AVKIND_MIN7 |
	swisseph.HELFLAG_AVKIND_MIN9
);
swisseph.TJD_INVALID = 99999999.0;
swisseph.SIMULATE_VICTORVB = 1;

swisseph.PHOTOPIC_FLAG = 0;
swisseph.SCOTOPIC_FLAG = 1;
swisseph.MIXEDOPIC_FLAG = 2;

swisseph.ephemeris = {
	'swisseph': swisseph.FLG_SWIEPH,
	'moshier': swisseph.FLG_MOSEPH,
	'de200': 'de200.eph',
	'de405': 'de405.eph',
	'de406': 'de406.eph',
	'de414': 'de414.eph',
	'de421': 'de421.eph',
	'de422': 'de422.eph'
};

swisseph.set_ephe_path (__dirname + '/../ephe');

module.exports = swisseph;

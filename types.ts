export interface Data {
    job_id:                     string;
    job_title:                  string;
    employer_name:              string;
    employer_logo:              null | string;
    employer_website:           null | string;
    job_publisher:              string;
    job_employment_type:        null | string;
    job_employment_types:       string[];
    job_apply_link:             string;
    job_apply_is_direct:        boolean;
    apply_options:              ApplyOption[];
    job_description:            string;
    job_is_remote:              boolean;
    job_posted_at:              null | string;
    job_posted_at_timestamp:    number | null;
    job_posted_at_datetime_utc: Date | null;
    job_location:               JobLocation;
    job_city:                   JobCity;
    job_state:                  JobState;
    job_country:                JobCountry;
    job_latitude:               number;
    job_longitude:              number;
    job_benefits:               string[] | null;
    job_google_link:            string;
    job_salary?:                null;
    job_min_salary:             number | null;
    job_max_salary:             number | null;
    job_salary_period:          null | string;
    job_highlights:             JobHighlights;
    job_onet_soc:               string;
    job_onet_job_zone:          string;
}

export interface ApplyOption {
    publisher:  string;
    apply_link: string;
    is_direct:  boolean;
}

export enum JobCity {
    Chicago = "Chicago",
    WestChicago = "West Chicago",
}

export enum JobCountry {
    Us = "US",
}

export interface JobHighlights {
    Qualifications?:   string[];
    Benefits?:         string[];
    Responsibilities?: string[];
}

export enum JobLocation {
    ChicagoIL = "Chicago, IL",
    WestChicagoIL = "West Chicago, IL",
}

export enum JobState {
    Illinois = "Illinois",
}

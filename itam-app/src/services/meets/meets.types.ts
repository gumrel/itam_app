export interface MeetData {
	image_base64: string;
	created_at: string;
	start_date: string;
	end_date: string;
	name: string;
	location: string;
	description: string;
	tag: string;
	type: string;
	max_participants: string;
	online_link: string;
	meet_programm: Array<{ start_case: string; end_case: string; case_info: string }>;
}

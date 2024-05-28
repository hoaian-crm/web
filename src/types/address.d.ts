export type IAddress = {
  // Address data return from goong map
  id?: string;
  metadata: {
    url?: string;
    name?: string;
    place_id: string;
  };
};

export type ISearchAddress = {
  description: string;
  matched_substrings: Array<string>;
  place_id: string;
  reference: string;
  structured_formatting: {
    main_text: string;
    main_text_matched_substrings: string;
    secondary_text: string;
    secondary_text_matched_substrings: string;
  };
};

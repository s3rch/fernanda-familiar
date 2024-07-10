export interface NewsResponse {
  id:                            number;
  date:                          Date;
  date_gmt:                      Date;
  guid:                          GUID;
  modified:                      Date;
  modified_gmt:                  Date;
  slug:                          string;
  status:                        string;
  type:                          string;
  link:                          string;
  title:                         GUID;
  content:                       Content;
  excerpt:                       Content;
  author:                        number;
  featured_media:                number;
  comment_status:                string;
  ping_status:                   string;
  sticky:                        boolean;
  template:                      string;
  format:                        string;
  meta:                          Meta;
  categories:                    number[];
  tags:                          number[];
  jetpack_publicize_connections: any[];
  acf:                           any[];
  aioseo_notices:                any[];
  jetpack_sharing_enabled:       boolean;
  jetpack_featured_media_url:    string;
  jetpack_shortlink:             string;
  _links:                        Links;
}

export interface Links {
  self:                  About[];
  collection:            About[];
  about:                 About[];
  author:                Author[];
  replies:               Author[];
  "version-history":     VersionHistory[];
  "predecessor-version": PredecessorVersion[];
  "wp:featuredmedia":    Author[];
  "wp:attachment":       About[];
  "wp:term":             WpTerm[];
  curies:                Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href:       string;
}

export interface Cury {
  name:      string;
  href:      string;
  templated: boolean;
}

export interface PredecessorVersion {
  id:   number;
  href: string;
}

export interface VersionHistory {
  count: number;
  href:  string;
}

export interface WpTerm {
  taxonomy:   string;
  embeddable: boolean;
  href:       string;
}

export interface Content {
  rendered:  string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}

export interface Meta {
  _acf_changed:                       boolean;
  _monsterinsights_skip_tracking:     boolean;
  _monsterinsights_sitenote_active:   boolean;
  _monsterinsights_sitenote_note:     string;
  _monsterinsights_sitenote_category: number;
  _uf_show_specific_survey:           number;
  _uf_disable_surveys:                boolean;
  jetpack_post_was_ever_published:    boolean;
  _jetpack_newsletter_access:         string;
  _jetpack_dont_email_post_to_subs:   boolean;
  _jetpack_newsletter_tier_id:        number;
  footnotes:                          string;
  jetpack_publicize_message:          string;
  jetpack_publicize_feature_enabled:  boolean;
  jetpack_social_post_already_shared: boolean;
  jetpack_social_options:             JetpackSocialOptions;
}

export interface JetpackSocialOptions {
  image_generator_settings: ImageGeneratorSettings;
}

export interface ImageGeneratorSettings {
  template: string;
  enabled:  boolean;
}

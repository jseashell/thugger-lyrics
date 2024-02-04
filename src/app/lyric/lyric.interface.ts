export interface Lyric {
  /** uuid */
  id: string;
  /** identifier of the song */
  song_id: number;
  /** hash of {@link value} */
  h_value: number;
  /** lyric text */
  value: string;
}

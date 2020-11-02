import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAudioPlaylistComponent } from './show-playlist.component';

describe('ShowAudioPlaylistComponent', () => {
  let component: ShowAudioPlaylistComponent;
  let fixture: ComponentFixture<ShowAudioPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAudioPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAudioPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

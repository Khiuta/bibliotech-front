import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { Calendario } from './styled';

export default function Calendar() {
  return (
    <Calendario>
      <FullCalendar
        viewClassNames="calendario"
        allDayClassNames="nome-dias"
        dayCellClassNames="dias"
        slotLaneClassNames="slotLane"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
      />
    </Calendario>
  );
}

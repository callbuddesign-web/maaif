'use client';
import React from 'react';
import { Widget } from '@typeform/embed-react';

interface TypeformInquiryProps {
  serviceLabel: string;
}

export default function TypeformInquiry({ serviceLabel }: TypeformInquiryProps) {
  return (
    <div className="rounded-3xl border border-border bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-8 pt-8 pb-4 border-b border-border">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
          Citizen Inquiry
        </span>
        <h3 className="font-serif-display text-2xl font-medium text-foreground leading-tight">
          Submit an Inquiry
        </h3>
        <p className="text-muted-foreground text-sm mt-1">
          Regarding: <span className="font-medium text-foreground">{serviceLabel}</span>
        </p>
      </div>

      {/* Typeform Widget */}
      <Widget
        id="lnJoTnZK"
        style={{ width: '100%', height: '520px' }}
        className="typeform-widget"
        hidden={{ service: serviceLabel }}
        onSubmit={() => {
          // Submission handled by Typeform
        }}
      />
    </div>
  );
}
